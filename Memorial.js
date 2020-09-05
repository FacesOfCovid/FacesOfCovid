const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemorialSchema = new Schema({ // users can post to the main feed 
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    name: { type: String },
    photo: { type: String },
    story: { type: String, required: true },
    dateOfBirth: { type: Date, default: Date.now },
    dateOfPassing: { type: Date, default: Date.now }

    // ** The below features don't seem appropriate for this type of app. **

    // avatar: { type: String },
    // likes: [
    //     {
    //         user: {
    //             type: Schema.Types.ObjectId,
    //             ref: 'users'
    //         }
    //     }
    // ],
    // comments: [
    //     {
    //         user: {
    //             type: Schema.Types.ObjectId,
    //             ref: 'users'
    //         },
    //         text: { type: String, required: true },
    //         fullName: { type: String },
    //         avatar: { type: String },
    //         date: { type: Date, default: Date.now }
    //     }
    // ],

});
const Memorial = mongoose.model('memorial', MemorialSchema);
module.exports = { Memorial };