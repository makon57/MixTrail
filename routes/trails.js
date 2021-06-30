// const  express = require('express');
// const router = express.Router();
// const { csrfProtection, asyncHandler } = require('./utils');
// const db = require('../db/models');


// router.get('/:id', csrfProtection, asyncHandler(async(req, res, next) => {
//     const trailId = parseInt(req.params.id);
//     let trail = await db.Trails.findByPk(trailId);
//     res.render('trail-detail',
//         trail
//     );
// }));

// module.exports = router;
