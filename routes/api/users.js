const express = require('express');
const routR = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cFig = require('config');
const { check, validationResult } = require('express-validator');
// >> USER_MODEL
const { User } = require('../../models/User');

/**
 * @route   POST api/users
 * @desc    Register new user
 * @access  Public
 */
routR.post('/', [
    check('fullName', "We need to know who you are!")
        .not()
        .isEmpty(),
    check('email', "Please provide a valid email")
        .isEmail(),
    check('pwd', "Please provide a password with at least 6 characters!")
    .isLength({ min: 6 })

], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    };
    const { fullName, email, pwd } = req.body;
    try {
        // check if user exists
        let user = await User.findOne({ email });
        if (user) {
            res.status(400).json({ errors: [{ msg: 'User already exists!' }] });
        }
        // get users gravatar
        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        });
        user = new User({
            fullName,
            email,
            avatar,
            pwd
        });
        // create a salt
        const salt = await bcrypt.genSalt(10);
        // encrypt pwd
        user.pwd = await bcrypt.hash(pwd, salt);
        await user.save();
        // return jwt
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
                res.json({ tk })
            });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Internal Server Error!');  
    }
});
module.exports = routR;