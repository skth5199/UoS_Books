const BookingDAO = require('../DAO/bookingDAO');
const bookingDAO = new BookingDAO();
class BookingService {
    async createBooking(data){
        return await bookingDAO.createBooking(data)
    }

    async getAllBookingsByUser(data) {
        return await bookingDAO.getAllBookingsByUser(data)
    }

    async getBooking(data) {
        return await bookingDAO.getBooking(data)
    }

    async updateBookingStatus(data) {
        return await bookingDAO.updateBookingStatus(data)
    }
}

module.exports = BookingService;