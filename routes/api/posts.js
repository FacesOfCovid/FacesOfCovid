const express = require('express');
const routR = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
// >> DB_MODELS
const { Post } = require('../../models/Post');
const { User } = require('../../models/User');
// ===================================
/**
 * @route   POST api/posts
 * @desc    Create a new post
 * @access  Private
 */
routR.post('/',[auth, [
    check('text', "Text is required to make a post!")
        .not()
        .isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        // create user instance from model << so we get the name('user') & avatar
        const user = await User.findById(req.user.id).select('-pwd');
        // instantiate new post_obj and the txt will come from the body
        const newPost = new Post({
            text: req.body.text,
            photo: req.body.photo,
            name: user.fullName,
            avatar: user.avatar,
            user: req.user.id
        });
        const post = await newPost.save();
        res.json(post);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Internal Server Error!')
    };
});
// ===================================
/**
 * @route   GET api/posts
 * @desc    GET all posts
 * @access  Private
 */
routR.get('/', auth, async (req, res) => {
    try {
        // get posts
        const posts = await Post.find().sort({ date: -1 });
        res.json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error!');
    };
});
// ===================================
/**
 * @route   GET api/posts/:id
 * @desc    GET post -> ID
 * @access  Private
 */
routR.get('/:id', auth, async (req, res) => {
    try {
    // get post_obj
    const post = await Post.findById(req.params.id);
    // check if post is associated with user_id
    if (!post) {
        return res.status(404).json({ msg: 'Could NOT locate post!' });
    }
    res.json(post);
    } catch (err) {
        console.error(err);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Could NOT locate post!' });
        }
        res.status(500).send('Internal Server Error!');
    };
});
// ===================================
/**
 * @route   DELETE api/posts/:id
 * @desc    DELETE post -> ID
 * @access  Private
 */
routR.delete('/:id', auth, async (req, res) => {
    try {
        // get post_obj to be deleted
        const post = await Post.findById(req.params.id);
        // check if post exists
        if (!post) {
            return res.status(404).json({ msg: 'Could NOT locate post!' });
        }
        // check user
        if (post.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User is NOT authorized!' });
        }
        await post.remove();
        res.json({ msg: 'Post has been removed from database!' });
    } catch (err) {
        console.error(err);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Could NOT locate post!' });
        }
        res.status(500).send('Internal Server Error!');
    };
});
// ===================================
/**
 * @route   PUT api/posts/like/:id
 * @desc    Like a post
 * @access  Private
 */
routR.put('/like/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        // check if post has already been liked by user
        if (post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
            return res.status(400).json({ msg: 'Post has already been liked!' });
        }
        post.likes.unshift({ user: req.user.id });
        await post.save();
        res.json(post.likes);    
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Internal Server Error!');
    };
});
// ===================================
/**
 * @route   PUT api/posts/unlike/:id
 * @desc    Unlike a post
 * @access  Private
 */
routR.put('/unlike/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        // check if post has already been liked by user
        if (post.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
            return res.status(400).json({ msg: 'Post has NOt been liked...yet!' });
        }
        // get the index of removed item
        const rmIdx = post.likes.map(like => like.user.toString()).indexOf(req.user.id);
        post.likes.splice(rmIdx, 1);
        await post.save();
        res.json(post.likes); 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Internal Server Error!');
    };
});
// ===============> COMMENT <====================
/**
 * @route   POST api/posts/comment/:id
 * @desc    Comment on a post
 * @access  Private
 */
routR.post('/comment/:id', [auth, [
    check('text', "You need to actually type something to make a comment!")
        .not()
        .isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        // get user MINUS_password
        const user = await User.findById(req.user.id).select('-pwd');
        // get post_obj
        const post = await Post.findById(req.params.id);
        const newComment = {
            text: req.body.text,
            fullName: user.fullName,
            avatar: user.avatar,
            user: req.user.id
        };
        post.comments.unshift(newComment);
        await post.save();
        res.json(post.comments);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Internal Server Error!');
    };
});
// ===================================
/**
 * @route   DELETE api/posts/comment/:id/:cid
 * @desc    DELETE a comment from a post
 * @access  Private
 */
routR.delete('/comment/:id/:cid', auth, async (req, res) => {
    try {
        // get post_obj to be deleted
        const post = await Post.findById(req.params.id);
        // get comment_obj from post to be be deleted
        const comment = post.comments.find(comment => comment.id === req.params.cid);
        // make sure comment exists
        if (!comment) {
            return res.status(404).json({ msg: 'Comment does NOT exist...yet!' });
        }
        // check user
        if (comment.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User is not authorized to make this action!' });
        }
        const rmIdx = post.comments.map(comment => comment.user.toString()).indexOf(req.user.id);
        // remove the comment by its index
        post.comments.splice(rmIdx, 1);
        await post.save();
        res.json(post.comments)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Internal Server Error!');
    };
});

module.exports = routR;