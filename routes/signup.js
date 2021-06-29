const  express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');

/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) =>  {
  res.render('signup');
}));

module.exports = router;