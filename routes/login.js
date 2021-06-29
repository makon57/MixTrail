const  express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { loginUser } = require('../auth');

/* GET home page. */
router.get('/', csrfProtection, asyncHandler(async (req, res, next) =>  {
  res.render('login', {
      title: 'login',
      csrfToken: req.csrfToken()
  });

}));

const loginValidators = [
  check('emailAddress')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password'),
];

router.post('/', csrfProtection, loginValidators, asyncHandler(async (req,res,next) => {

  const {
    email,
    password
  } = req.body;

  let errors = [];
  const valErrors = validationResult(req);

  if (valErrors.isEmpty()) {
    const user = await db.User.findOne({ where: { email } });

    if (user !== null && user.password === password) {
      loginUser(req, res, user);
      return res.redirect('/');
    }
    errors.push('Login failed')
  } else {
    errors = valErrors.array().map((error) => error.msg);
  }

  res.render('login', {
    title: 'Login',
    email,
    errors,
    csrfToken: req.csrfToken(),
  });
}));




module.exports = router;
