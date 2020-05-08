const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserAccount = new Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    avatar: { type: String },
    pwd: { type: String, required: true },
    date: { type: Date, default: Date.now }
});
const User = mongoose.model('user', UserAccount);
module.exports = { User };