const express = require('express');
const router = express.Router();

//bring in model//
const User = require('../../models/User');

// @route GET api/users
// @desc Register new user
// @access public

router.get('/', (req,res) => {
   res.send('register')
});


module.exports = router;