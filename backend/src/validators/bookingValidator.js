const { throwError, validateRequiredFields } = require('../utils/Common');

module.exports = {
    createBooking : (data) => {
        let requiredFields = {
            "book_id": "Book Id",
            "buyer_id": "Buyer Id",
            "phone_number": "Phone Number",
            "address": "Address"
        }
        let requiredData = validateRequiredFields(data, requiredFields);;
        if (requiredData.length > 0){
            throwError(400, "Required data input", requiredData)
        }
    },

    getAllBookingsByUser: (data) => {
        let requiredFields = {
            // "user_id": "User ID"
        }
        let requiredData = validateRequiredFields(data, requiredFields);
        if (requiredData.length > 0) {
            throwError(400, "Required data input", requiredData)
        }
    },

    getBooking: (data) => {
        let requiredFields = {
            "booking_id": "Booking Id"
        }
        let requiredData = validateRequiredFields(data, requiredFields);
        if (requiredData.length > 0) {
            throwError(400, "Required data input", requiredData)
        }
    },

    updateBookingStatus: (data) => {
        let requiredFields = {
            "booking_id": "Booking ID",
            "status": "Status"
        }
        let requiredData = validateRequiredFields(data, requiredFields);
        if (requiredData.length > 0) {
            throwError(400, "Required data input", requiredData)
        }
        let validationError = [];
        if(!['new', 'booked', 'sold'].includes(data['status'])){
          validationError.push({
            key: 'status',
            msg: "status must be any of these, [new, booked, sold]"
          })
        }
        
        if (validationError.length > 0){
          throwError(400, "validationError", validationError)
        }
    }
}