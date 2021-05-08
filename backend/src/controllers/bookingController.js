const requestValidator = require('../validators/bookingValidator')
const BookingService = require('../services/bookingService');
const bookingService = new BookingService();

module.exports = {

    createBooking: async (req, res, next) => {
        try {
            requestValidator.createBooking(req.body);
            let booking = await bookingService.createBooking(req.body);
            return res.json({success: true, booking: booking});
        } catch (e) {
            next(e);
        }
    },

    getAllBookingsByUser: async (req, res, next) => {
        try {
            requestValidator.getAllBookingsByUser(req.body);
            let booking = await bookingService.getAllBookingsByUser(req.body);
            return res.json({success: true, bookings: booking});
        } catch (e) {
            next(e);
        }
    },

    getBooking: async (req, res, next) => {
        try {
            requestValidator.getBooking(req.body);
            let booking = await bookingService.getBooking(req.body);
            return res.json({success: true, booking: booking});
        } catch (e) {
            next(e);
        }
    },

    updateBookingStatus: async (req, res, next) => {
        try {
            requestValidator.updateBookingStatus(req.body);
            let response = await bookingService.updateBookingStatus(req.body);
            return res.json({success: true, msg: response})
        } catch (e) {
            next(e);
        }
    }
}