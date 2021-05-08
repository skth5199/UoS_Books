const { authenticate, authorize } = require('../controllers/AuthController');
const { createBooking, getAllBookingsByUser, getBooking, updateBookingStatus } = require('../controllers/bookingController');

const router = require('express').Router();

router.post('/createBooking', authenticate, authorize("buyer"), createBooking)

router.post('/getAllBookingsByUser', authenticate, authorize("all"), getAllBookingsByUser);

router.post('/getBooking', authenticate, authorize("all"), getBooking)

router.post('/updateBookingStatus', authenticate, authorize("seller"), updateBookingStatus)

module.exports = router;