const express = require('express');
const router = express.Router();
const { logoutUser } = require('../auth');
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MixTrail' })
});
router.post('/', (req, res) => {
  logoutUser(req, res);
  res.redirect('/login');
});


router.get('/', asyncHandler(async (req, res) => {
  const trails = await db.Trails.findAll()
  

}))


  res.render('index.pug', {
    listTitle: 'Trails',
    error,
    trails,
  });


module.exports = router;