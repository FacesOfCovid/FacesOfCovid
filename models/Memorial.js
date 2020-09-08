const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const memorialSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    name: { type: String, required: true },
    story: { type: String },
    dateOfBirth: { type: String },
    dateOfPassing: { type: String },
    photo: { type: String },
    cityOfBirth: { type: String },
    stateOfBirth: { type: String },
    cityOfResidence: { type: String },
    stateOfResidence: { type: String },
});



const Memorial = mongoose.model("Memorial", memorialSchema);

module.exports = Memorial;