const express = require('express');
const router = express.Router();
const { logoutUser } = require('../auth');
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index')
// });

// router.get('/', asyncHandler(async(req, res, next) => {
//   const trails = await db.Trail.findAll();
//   console.log(trails);
//   res.render("index", { title: 'MixTrail', trails });
// }));

// router.get('/', csrfProtection, asyncHandler(async(req, res) => {
//   const users = await db.User.findAll();
//   res.render('index', ({ users }));
// }));

router.get('/', csrfProtection, asyncHandler(async(req, res) => {
  const trails = await db.Trail.findAll();
  res.render('index', ({ trails }));
}));

// router.get('/trails/:id(\\d+)', csrfProtection, asyncHandler(async(req, res, next) => {
//   const trailId = parseInt(req.params.id, 10);
//   const trail = await db.Trails.findByPk(trailId);
//   res.render('trail-detail', {
//       title: "Park Detail",
//       trail
//   });
// }));


router.post('/', (req, res) => {
  logoutUser(req, res);
  res.redirect('/login');
});

module.exports = router;
