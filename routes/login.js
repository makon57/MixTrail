const  express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');

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

// router.post('/', csrfProtection, asyncHandler(async (req,res,next) => {}




module.exports = router;