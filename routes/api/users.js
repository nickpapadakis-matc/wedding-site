const express = require('express');
const router = express.Router();

//Load user model
const User = require('../../models/User');
const GuestList = require('../../models/GuestList');

//  @route  GET api/users/test
//  @desc   Tests user route
//  @access Public
router.get('/test', (req, res) => res.json({ msg: 'Users works' }));

//  @route  GET api/users/rsvp
//  @desc   submits user details to db
//  @access Public
router.post('/rsvp', (req, res) => {
  const errors = {};
  User.findOne({ guests: { name: req.body.name } }).then(user => {
    if (!user) {
      errors.guestName =
        'Sorry we cannot find that name in our database, please check to make sure you used the spelling on the invite you recieved in the mail.';
      return res.status(400).json(errors);
    } else if (user) {
      User.findOne({ name: req.body.name }).then(user => {
        if (user) {
          errors.guestName = 'It looks like you already have a RSVP with us';
          return res.status(400).json(errors);
        } else {
          errors.guestName = 'Found You! You are now offical';
          const newUser = new User({
            name: req.body.name,
            coming: req.body.coming,
            email: req.body.email,
            food: req.body.food,
            hasGuest: req.body.hasGuest,
            guestName: req.body.guestName,
            guestFood: req.body.guestFood
          });
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err.response.data));
        }
      });
    }
  });
});

//  @route  GET api/users/all
//  @desc   gets all guests name, email, rsvp status, food choice, has guest?, guest name, guest food
//  @access Public
router.get('/all', (req, res) => {
  const errors = {};
  User.find()
    .populate('user', [
      'name',
      'email',
      'coming',
      'food',
      'hasGuest',
      'guestName',
      'guestFood'
    ])
    .then(users => {
      if (!users) {
        errors.noprofile = 'There are no guests';
        return res.status(404).json(errors);
      }

      res.json(users);
    })
    .catch(err =>
      res.status(404).json({ users: 'There are no guests at the moment' })
    );
});

router.post('/guest', (req, res) => {
  const errors = {};
  const success = {};
  User.findOne({ guests: { name: req.body.name } }).then(user => {
    if (!user) {
      errors.guestName =
        'Sorry we cannot find that name in our database, please check to make sure you used the spelling on the invite you recieved in the mail.';
      return res.status(400).json(errors);
    } else if (user) {
      User.findOne({ name: req.body.name }).then(user => {
        if (user) {
          errors.guestName = 'It looks like you already have a RSVP with us';
          return res.status(400).json(errors);
        } else {
          errors.guestName = 'Found you!';
          return res.status(200).json(errors);
        }
      });
    }
  });
});

module.exports = router;
