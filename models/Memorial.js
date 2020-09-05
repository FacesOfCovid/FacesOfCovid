const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const memorialSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    name: { type: String, required: true },
    story: { type: String },
    dateOfBirth: { type: Date },
    dateOfPassing: { type: Date }
});



const Memorial = mongoose.model("Memorial", memorialSchema);

module.exports = Memorial;