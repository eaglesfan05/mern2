const express = require('express');
const router = express.Router();

//protected routes//
//bring in auth
const auth = require('../../middleware/auth');
//bring in model//
const User = require('../../models/User');

   // @route GET api/auth/user
    // @desc Get user data
    // @access private
    router.get('/', auth, (req, res) => {
        User.findById(req.user.id)
            //-password disregards the password
            .select('-password')
            .then(user => res.json(user))
    })

    module.exports = router;