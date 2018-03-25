var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Project = require('../models/Project.js');

/* GET ALL BOOKS */
// router.get('/', passport.authenticate('jwt', { session: false}), function(req, res) {
//   var token = getToken(req.headers);
//   if (token) {
//     var decode = jwtDecode(token);
//     console.log(decode)
//     console.log(decode._id);
//     Project.find(function (err, projects) {
//       if (err) return next(err);
//       res.json(projects);
//     });
//   } else {
//     Project.find(function (err, projects) {
//       if (err) return next(err);
//       res.json(projects);
//     });
//   }
// });

/* GET ALL PROJECTS */
router.get('/',  function(req, res, next) {
  Project.find(function (err, demo) {
    if (err) return next(err);
    res.json(demo);
  });
});

/* GET SINGLE PROJECT BY ID */
router.get('/:id', function(req, res, next) {
  Project.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// /* SAVE PROJECT */
// router.post('/', passport.authenticate('jwt', { session: false}), function(req, res) {
//   var token = getToken(req.headers);
//   if (token) {
//     Project.create(req.body, function (err, post) {
//       if (err) return next(err);
//       res.json(post);
//     });
//   } else {
//     return res.status(403).send({success: false, msg: 'Unauthorized.'});
//   }
// });

/* SAVE PROJECT */
router.post('/', function(req, res, next) {
  Project.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BOOK */
router.put('/:id', function(req, res, next) {
  Project.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
})

// /* UPDATE PROJECT */
// router.put('/:id', passport.authenticate('jwt', { session: false}), function(req, res, next) {
//   var token = getToken(req.headers);
//   if (token) {
//     Project.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//       if (err) return next(err);
//       res.json(post);
//     });
//   } else {
//     return res.status(403).send({success: false, msg: 'Unauthorized.'});
//   }
// });

/* DELETE BOOK */
router.delete('/:id', function(req, res, next) {
  Project.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// /* DELETE PROJECT */
// router.delete('/:id', passport.authenticate('jwt', { session: false}), function(req, res, next) {
//   var token = getToken(req.headers);
//   if (token) {
//     Project.findByIdAndRemove(req.params.id, req.body, function (err, post) {
//       if (err) return next(err);
//       res.json(post);
//     });
//   } else {
//     return res.status(403).send({success: false, msg: 'Unauthorized.'});
//   }
// });

// getToken = function (headers) {
//   if (headers && headers.authorization) {
//     var parted = headers.authorization.split(' ');
//     if (parted.length === 2) {
//       return parted[1];
//     } else {
//       return null;
//     }
//   } else {
//     return null;
//   }
// };

module.exports = router;
