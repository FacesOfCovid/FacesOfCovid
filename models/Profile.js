const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProfileSchema = new Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "user" 
    },
    status: { 
        type: String, 
        required: true 
    },
    location: { type: String },
    bio: { type: String },
    // bestQualities can be changed to usePhotos
    // we must come to a consesus of where we would like 
    // to place xyz data so that it makes it that much easier when 
    // connecting the client and server. As it holds an array of string-type
    bestQualities: {
        type: [String],
        required: true
    }, 
    lovedOnes: [ // have users able to post THEIR intel about their loved ones, friends, etc. to their profile
        {
            name: { type: String, required: true },
            avi: { type: String, required: true }, //if !provided then post cannot be made for a blank persons Covid-story 
            dateStart: { type: Date, required: true },
            dateEnd: { type: Date },
            recovered: { type: Boolean },
            description: { type: String }
        }
    ],
    social: {
        youtube: { type: String },
        twitter: { type: String },
        instagram: { type: String },
        facebook: { type: String },
        linkedin: { type: String },
        github: { type: String }
    },
    date: { type: Date, default: Date.now }
});
const Profile = mongoose.model('profile', ProfileSchema);
module.exports = { Profile };