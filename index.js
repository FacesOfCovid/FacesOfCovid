const express = require('express');
const app = express()
const path = require('path');
const PORT= process.env.PORT || 5150;
const connectDB = require('./config/db');
// Connect database
connectDB();

// express middleware
app.use(express.json({ extended: false }));

// define routes
app.use('/api/users', require('./routes/api/users'));
// app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/profile', require('./routes/api/profile'));
// app.use('/api/posts', require('./routes/api/posts'));

// Serve static assets --> PRODUCTION >> BUILD: client/build/index.html
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });
// };

app.listen(PORT, () => console.log('EXPRESS_API_SERVER listing at port:'+PORT));