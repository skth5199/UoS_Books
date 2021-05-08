const Booking = require('../models/bookingModel');
const Book = require('../models/bookModel');
const User = require('../models/userModel');
const Notification = require('../models/notificationModel');
const { throwError } = require('../utils/Common')
const NotificationDAO = require('../DAO/notificationDAO');
const notificationDAO = new NotificationDAO();
class BookingDAO {

    async createBooking(data) {
        let book = await Book.findById(data['book_id']);
        if (!book) throwError(404, "Book data not found");
        if (book.status == "Booked") throwError(405, "Book alredy booked")
        let buyerQuery = User.findById(data['buyer_id']);
        let sellerQuery = User.findById(book.user);
        let [buyer, seller ] = await Promise.all([buyerQuery, sellerQuery])
        if (!buyer || !seller) throwError(404, "User not found");
        let bookingData = {
            book_id: data['book_id'],
            buyer_id: data['buyer_id'],
            seller_id: seller._id,
            number: data['phone_number'],
            address: data['address'],
            status: 'booked'
        }
        let [booking, _] = await Promise.all([Booking.create(bookingData), Book.findByIdAndUpdate({_id: book._id}, {status: "Booked"}) ]);
        let notificationData = {
            booking_id: booking._id,
            user_id: seller._id,
            status: 'active',
            message: `Your book ${book.title} is booked by ${buyer.first_name} ${buyer.last_name} and go to book tracking page to update the book status`
        }
        await notificationDAO.createNotification(notificationData)
        return booking._id;
    }

    async getAllBookingsByUser(data) {
        let user = await User.findById(data._user.id);
        if (!user) throwError(404, "User not found");
        let bookings= [];
        if (data._user.role == 'buyer') {
            bookings = await Booking.find({buyer_id: data._user.id}).where({status: 'booked'});    
        }
        else bookings = await Booking.find({seller_id: data._user.id}).where({status: 'booked'});

        return  bookings.map(book => {
            return { 
                id: book._id,
                book_name: book.book_id.title,
                buyer_name: book.buyer_id.first_name+ " "+ book.buyer_id.last_name,
                phone_no: book.number,
                address: book.address,
                current_status: book.status
            }
        })
    }

    async getBooking(data) {
        let user = await User.findById(data._user.id);
        if (!user) throwError(404, "User not found");
        let booking = await Booking.findById(data['booking_id']);
        if (!booking) throwError(404, "Booking not found");
        return {
            id: booking._id,
            buyerName: booking.buyer_id.first_name+ " "+ booking.buyer_id.last_name,
            address: booking.address,
            number: booking.number,
            status: booking.status
        }
    }

    async updateBookingStatus(data) {
        let user = await User.findById(data._user.id);
        if (!user) throwError(404, "User not found");
        let booking = await Booking.findByIdAndUpdate(data['booking_id'], {status: data['status']});
        await Book.findByIdAndUpdate(booking.book_id, {status: data['status']})
        await Notification.findOneAndUpdate({booking_id: booking._id}, {status: 'deactive'});
        return "Successfully updated book"
    }
}
module.exports = BookingDAO;