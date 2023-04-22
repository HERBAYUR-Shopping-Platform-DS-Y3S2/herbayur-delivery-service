// app.js

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');
// const basicAuth = require('express-basic-auth');
// const cookieParser = require('cookie-parser');

// const auth = basicAuth({
//    users: {
//       admin: '123',
//       user: '456',
//    },
// });

// routes
// const items = require('./routes/items');  //use this when implementing routes

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
// app.use('/api/items', items);  //use this when implementing routes

app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5002;

// app.listen(port, () => console.log(`Server running on port ${port}`));

// app.use(cookieParser('82e4e438a0705fabf61f9854e3b575af'));

app.use(express.static(path.join(__dirname, '/client/build')))
   .listen(PORT, () => console.log(`Listening on ${PORT}`));

// app.get('/', (req, res) => {
//    res.sendFile(path.join(__dirname, '/client/build/index.html'));
// });

// app.get('/authenticate', auth, (req, res) => {
//    const options = {
//       httpOnly: true,
//       signed: true,
//    };

//    console.log(req.auth.user);

//    if (req.auth.user === 'admin') {
//       res.cookie('name', 'admin', options).send({ screen: 'admin' });
//    } else if (req.auth.user === 'user') {
//       res.cookie('name', 'user', options).send({ screen: 'user' });
//    }
// });

// app.get('/read-cookie', (req, res) => {
//    console.log(req.signedCookies);
//    if (req.signedCookies.name === 'admin') {
//       res.send({ screen: 'admin' });
//    } else if (req.signedCookies.name === 'user') {
//       res.send({ screen: 'user' });
//    } else {
//       res.send({ screen: 'auth' });
//    }
// });

// app.get('/clear-cookie', (req, res) => {
//    res.clearCookie('name').end();
// });

// app.get('/get-data', (req, res) => {
//    if (req.signedCookies.name === 'admin') {
//       res.send('This is admin panel');
//    } else if (req.signedCookies.name === 'user') {
//       res.send('This is user data');
//    } else {
//       res.end();
//    }
// });