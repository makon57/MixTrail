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
  const user = await getUserFromSession(req);
  res.render('index', ({ trails, user }));
}));


router.get('/trail/:id(\\d+)', asyncHandler(async(req, res, next) => {
  const trailId = parseInt(req.params.id, 10);
  const trail = await db.Trail.findByPk(trailId);
  const reviews = await db.Review.findAll({ where: { trailId }, include: "User" })
  res.render('trail-detail', {
      title: "Park Detail",
      trail,
      reviews
  });
}));

router.post('/trail/:id(\\d+)', asyncHandler(async(req, res, next) => {
  const { text } = req.body;
  const trailId = req.params.id;
  const user = req.session.auth.userId
  await db.Review.create({ text, userId: user, trailId, rating: 4, createdAt: new Date() });
  res.redirect(`/trail/${trailId}`);
}));

// router.put('/trail/:id(\\d+)', asyncHandler(async(req, res, next) => {
//   const trailId = req.params.id;
//   const review = await db.Review.findByPk(trailId);
//   const user = req.session.auth.userId
//   if (review) {
//       await review.update({ text: req.body.text });
//   }
// }));

router.put(
  "/trail/:id(\\d+)",
  asyncHandler(async (req, res, next) => {
    const review = await Review.findOne({ where: { id: req.params.id } });

    if (req.user.id !== review.userId) {
      const err = new Error("Unauthorized");
      err.status = 401;
      err.message = "You are not authorized to edit this tweet.";
      err.title = "Unauthorized";
      throw err;
    } else if (review) {
      await review.update({ text: req.body.text });
    }
  })
);

router.post('/trail/:id(\\d+)/delete', asyncHandler(async(req, res, next) => {
  console.log("akjsbvbalkbvakaubvk")
  const trailId = req.params.id;
  const userId = req.session.auth.userId
  const review = await db.Review.findOne({ where: { trailId, userId } })
  console.log(review);
  await review.destroy();
  res.redirect(`/trail/${trailId}`);
}));

// router.delete('/trail/:id', function (req, res) {
//   console.log("DELETE review")
//   Review.findByIdAndRemove(req.params.id).then((review) => {
//     res.redirect('/');
//   }).catch((err) => {
//     console.log(err.message);
//   })
// })


router.post('/', (req, res) => {
  logoutUser(req, res);
  res.redirect('/login');
});

module.exports = router;
