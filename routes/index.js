const express = require('express');
const router = express.Router();
const { logoutUser } = require('../auth');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MixTrail' })
});
router.post('/', (req, res) => {
  logoutUser(req, res);
  res.redirect('/login');
});
module.exports = router;