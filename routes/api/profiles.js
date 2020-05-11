const express = require('express');
const routR = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
// >> DB_MODELS
const { Profile } = require('../../models/Profile');
const { User } = require('../../models/User');
const { Post } = require('../../models/Post');

/**
 * @route   GET api/profile/me
 * @desc    GET current user's profile
 * @access  Private
 */
routR.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user',
        [ 'fullName', 'avatar' ]);
        // check for if there is NO profile
        if (!profile) {
            return res.status(400).json({ msg: 'There is no profile created for this user as of this time.' });
        };
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Internal Server Error!');
    }
});

/**
 * @route   POST api/profile/
 * @desc    CREATE || UPDATE user-profile
 * @access  Private
 */
routR.post('/', [
    auth, [
        check('status', "Status is required").not().isEmpty(),
        check('bestQualities', "Best qualities are required!").not().isEmpty()
    ]
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    };
    // destructure from req body >> Profile
    const {
        status,
        location,
        bio,
        bestQualities,
        youtube,
        twitter,
        instagram,
        facebook,
        linkedin,
        github
    } = req.body;
    // construct a profile_object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (status) profileFields.status = status;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (bestQualities) profileFields.bestQualities = bestQualities;
    // construct a social_object
    profileFields.social = {};
    if (youtube) profileFields.social.youtube = youtube;
    if (twitter) profileFields.social.twitter = twitter;
    if (instagram) profileFields.social.instagram = instagram;
    if (facebook) profileFields.social.facebook = facebook;
    if (linkedin) profileFields.social.linkedin = linkedin;
    if (github) profileFields.social.github = github;
    
    try {
        // take profile_model & find by user
        let profile = await Profile.findOne({ user: req.user.id });
        if (profile) {
            // UPDATE = if true
            profile = await Profile.findOneAndUpdate({ user: req.user.id },
                { $set: profileFields },
                { new: true });
            return res.json(profile);    
        }
        // otherwise = if false --> CREATE new Profile
        profile = new Profile(profileFields);
        await profile.save();
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Internal Server Error!');
    }
    console.log(profileFields);
    // res.send("Yerrrr!");

});
// ===================================
/**
 * @route   GET api/profile
 * @desc    GET all profiles
 * @access  Public
 */
routR.get('/', async (req, res) => {
    try {
        // get profiles by find
        const profiles = await Profile.find().populate('user', ['fullName', 'avatar']);
        res.json(profiles);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Internal Server Error!')
    }
});
// ===================================
/**
 * @route   GET api/profile/user/:user_id
 * @desc    GET profile by id
 * @access  Public
 */
routR.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile
                                    .findOne({ user: req.params.user_id })
                                    .populate('user', ['fullName', 'avatar']);
        if (!profile) {
            return res.status(400).json({ msg: 'Sorry, we could NOT find your profile!' });
        }
        res.json(profile);                            
    } catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'Sorry, we could NOT find your profile!' });
        }
        res.status(500).send('Internal Server Error!');
    };
});
// ===================================
/**
 * @route   DELETE api/profile
 * @desc    DELETE profile, user, & post.
 * @access  Private
 */
routR.delete('/', auth, async (req, res) => {
    try {
        // remove post from user (*must remove post before removing account*)
        await Post.deleteMany({ user: rq.user.id })
        // remove profile
        await Profile.findOneAndRemove({ user: req.user.id });
        // remove user
        await User.findOneAndRemove({ _id: req.user.id });
        res.json({ msg: 'Bye Bye! Come back soon!' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Internal Server Error!');
    }
});





//=====================================
// ADJUST ALL FIELDS BELOW TO BECOME ABOUT INSERTING 
// DATA ABOUT LOVED_ONES: family/friends/etc whom has || had covid

// ===================================
/**
 * @route   PUT api/profile/loved-ones
 * @desc    PUT profile --> ' loved-ones: { ppl that they know who passed away from covid19 } '
 * @access  Private
 */
routR.put('/loved-ones', [auth, [
    check('name', "Title is required!")
        .not()
        .isEmpty(),
    check('avi', "We need a photo to identify whom this person is! Please upload a photo.")
        .not()
        .isEmpty(),    
    check('dateStart', "the date is required...otherise did it even happen?")
        .not()
        .isEmpty()
]], async (req, res) => {
    // THIS FORM WILL BE ON THE CLIENT_SIDE !
    // -------------------------------------
    // create errors_obj
    const errors = validationResult(req);
    // check for errors
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // destructure the request body
    const {
        name,
        avi,
        dateStart,
        dateEnd,
        recovered,
        description
    } = req.body;
    // make a new experience_obj
    const newLovedOne = {
        name,
        avi,
        dateStart,
        dateEnd,
        recovered,
        description
    };
    try {
        // fetch profile
        const profile = await Profile.findOne({ user: req.user.id });
        profile.lovedOnes.unshift(newLovedOne);
        await profile.save();
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Internal Serve Error!');
    }
});
// ===================================
/**
 * @route   DELETE api/profile/loved-ones/:lo_id
 * @desc    DELETE 'loved-one' >> from Profile
 * @access  Private
 */
routR.delete('/loved-ones/:lo_id', auth, async (req, res) => {
    try {
        // get profile
        const profile = await Profile.findOne({ user: req.user.id });
        // remove index
        const rmIdx = profile.lovedOnes.map(lo => lo.id).indexOf(req.params.lo_id);
        profile.lovedOnes.splice(rmIdx, 1);
        await profile.save();
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Internal Server Error!');
    };
});

module.exports = routR;