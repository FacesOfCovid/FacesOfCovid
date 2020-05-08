const express = require('express');
const routR = express.Router();
const jwt = require('jsonwebtoken');
const cFig = require('config');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
// >> MIDDLEWARE
const auth = require('../../middleware/auth');
// >> DB_MODELS
const { User } = require('../../models/User');

/**
 * @route   GET api/auth
 * @desc    test route
 * @access  Public
 */

routR.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-pwd');
        res.json(user);
        console.log(user)
        // console.log('get auth user method')
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Internal Server Error!');
    }
});

/**
 * @route   POST api/auth
 * @desc    authenticate user -> get the 'tk'
 * @access  Public
 */
routR.post('/', [
    check('email', "Please provide a valid email!").isEmail(),
    check('pwd', "Password is required!").exists()
], async (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // destruct email and password
    const { email, pwd } = req.body;
    try {
        // ----SECURITY----
        // 1. see if user exists or not
        let user = await User.findOne({ email });
        if (!user) {
            res.status(400).json({ errors: [{ msg: 'OOPS! That did not match our records; try again!' }] });
        }
        // 2. match email and password
        const isMatch = await bcrypt.compare(pwd, user.pwd);
        if (!isMatch) {
            return res.status(400).json({ errors: [{ msg: 'OOPS! That did not match our records; try again!' }] })
        }
        // ---- /__/|\__\ ----
        const payload = {
            user: {
                id: user.id
            }
        };
        jwt.sign(payload,
            cFig.get('scrtSTR'),
            { expiresIn: 33250 },
            (err, tk) => {
                if (err) throw err;
                res.json({ tk });
            }); 
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error!');
    }
});


module.exports = routR;