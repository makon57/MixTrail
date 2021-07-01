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
  const reviews = await db.Reviews.findAll({ where: trailId})
  res.render('trail-detail', {
      title: "Park Detail",
      trail,
      reviews
  });
}));



router.post('/trail/:id(\\d+)', csrfProtection, asyncHandler(async(req, res, next) => {
  const { text } = req.body;
  const review = await Review.create({ text, userId: req.user.id, trailId:req.trail.id, createdAt: req.review.createdAt });
  res.render('trail-detail', ({ review }));
}));

// router.put('/:id(\\d+)', validateTweet, handleValidationErrors,asyncHandler(async(req, res, next) => {
//   const tweetId = req.params.id;
//   const tweet = await Tweet.findByPk(tweetId);

//   if (tweet) {
//       await tweet.update({ message: req.body.message });
//       res.json({ tweet });
//   } else {
//       next(tweetNotFound(tweetId));
//   }
// }));

// router.delete('/:id(\\d+)', asyncHandler(async(req, res, next) => {
//   const tweetId = req.params.id;
//   const tweet = await Tweet.findByPk(tweetId);

//   if (tweet) {
//       await tweet.destroy();
//       res.status(201).end();
//   } else {
//       next(tweetNotFound(tweetId));
//   }
// }));


router.post('/', (req, res) => {
  logoutUser(req, res);
  res.redirect('/login');
});

module.exports = router;
