const express = require('express');
const router = express.Router();
const { logoutUser } = require('../auth');
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');

const getUserFromSession = async req => {
  if (req.session.auth) {
      const id = parseInt(req.session.auth.userId);
      let user = await db.User.findByPk(id);
      if (user) {
          user = user.toJSON();
          return {userId: user.id, username: user.username};
      } else {
          req.session.save(err => {
              if (err) return next(err);
              delete req.session.auth;
          })
      }
  }
  return false;
}

router.get('/', csrfProtection, asyncHandler(async(req, res) => {
  const trails = await db.Trail.findAll();
  const user = await getUserFromSession(req)
  res.render('index', ({ trails, user }));
}));


router.get('/trail/:id(\\d+)', csrfProtection, asyncHandler(async(req, res, next) => {
  const trailId = parseInt(req.params.id, 10);
  const trail = await db.Trail.findByPk(trailId);
  res.render('trail-detail', {
      title: "Park Detail",
      trail
  });
}));


router.post('/', (req, res) => {
  logoutUser(req, res);
  res.redirect('/login');
});

module.exports = router;
