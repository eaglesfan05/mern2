const express = require('express');
const router = express.Router();
//for password hashing//
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken')
//protected routes//
//bring in auth
const auth = require('../../middleware/auth');
//bring in model//
const User = require('../../models/User');

// @route POST api/auth
// @desc authenticate user
// @access public

router.post('/', (req, res) => {
    //Test route in postman first success is 200 response//
    //res.send('registered')
    //destructure req.body
    const { email, password } = req.body;

    //simple validation
    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    //Check for existing user
    User.findOne({ email })
        .then(user => {
            if (!user) return res.status(400).json({ msg: 'User does exist' });

            //Validate password//
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });
                    //if there is a match//
                    jwt.sign(
                        { id: user.id },
                        config.get('jwtSecret'),
                        //expiration is optional//
                        { expiresIn: 3600 },
                        (err, token) => {
                            if (err) throw err;
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email
                                }
                            })
                        }
                    )
                })

        })
    // @route GET api/auth/user
    // @desc Get user data
    // @access private
    // router.get('/user', auth, (req, res) => {
    //     User.findById(req.user.id)
    //         //-password disregards the password
    //         .select('-password')
    //         .then(user => res.json(user))
    // })
});


module.exports = router;