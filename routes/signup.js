const  express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const bcrypt = require('bcryptjs');
const { loginUser } = require('../auth');

/* GET home page. */
router.get('/', csrfProtection, asyncHandler(async (req, res, next) =>  {
  const user = db.User.build();
  res.render('signup', {
    title: 'Sign Up',
    user,
    csrfToken: req.csrfToken(),
  });
}));

const validationErrors = [
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a username.')
    .isLength({ max: 50 })
    .withMessage('Username must not be more than 50 characters long'),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for email.')
    .isLength({ max: 255 })
    .withMessage('Email must not be more than 255 characters long')
    .isEmail()
    .withMessage('Email is not a valid email')
    .custom((value) => {
      return db.User.findOne({ where: { email: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Email Address is already in use by another account');
          }
        });
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .isLength({ max: 50 })
    .withMessage('Password must not be more than 50 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .isLength({ max: 50 })
    .withMessage('Confirm Password must not be more than 50 characters long')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    }),
];

router.post('/', csrfProtection, validationErrors, asyncHandler(async(req, res, next) => {
  const {
    username,
    email,
    password
  } = req.body;

  const user = db.User.build({
    username,
    email,
  })

  const valErrors = validationResult(req);

  if (valErrors.isEmpty()) {
    // const hashedPassword = await bcrypt.hash(password, 10);
    // user.hashedPassword = hashedPassword;
    user.password = password
    await user.save();
    loginUser(req, res, user);
    res.redirect('/');
  } else {
    const errors = valErrors.array().map((error) => error.msg);
    res.render('signup', {
      title: 'Sign Up',
      user,
      errors,
      csrfToken: req.csrfToken(),
    });
  }
}));

module.exports = router;
