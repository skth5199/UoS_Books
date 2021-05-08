// routes/index.js
const router = require('express').Router();

// api/v1/user/auth
router.use('/auth', require('./Auth'));

// api/v1/user/register
router.use('/user', require('./user'));

//api/v1/book
router.use('/book', require('./book'));

//api/v1/booking
router.use('/booking', require('./booking'));

//api/v1/notification
router.use('/notification', require('./notification'));
module.exports = router;  