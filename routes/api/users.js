const express = require('express');
const router = express.Router();

//Load user model
const User = require('../../models/User');

//  @route  GET api/users/test
//  @desc   Tests user route
//  @access Public
router.get('/test', (req, res) => res.json({ msg: 'Users works' }));

//  @route  GET api/users/rsvp
//  @desc   submits user details to db
//  @access Public
router.post('/rsvp', (req, res) => {
  User.findOne({ name: req.body.name }).then(user => {
    if (user) {
      return res.status(400).json({ name: 'Name already exists' });
    } else {
      const newUser = new User({
        name: req.body.name,
        coming: req.body.coming,
        email: req.body.email,
        food: req.body.food
      });

      newUser
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
    }
  });
});

module.exports = router;
