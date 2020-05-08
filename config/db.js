const mongoose = require('mongoose');
const cFig = require('config');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || cFig.get('mongo'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('MONGODB_CONNECTED');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    };
};
module.exports = connectDB;