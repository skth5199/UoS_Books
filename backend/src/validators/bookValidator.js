const { validateRequiredFields, throwError } = require('../utils/Common');

module.exports = {
    addBook: (data) => {
        let requiredFields = {
            "book_title": "Book Title",
            "author_name": "Last Name",
            "description": "Description",
            "category": "Category"
          };
          // check required fields
          let requiredData = validateRequiredFields(data, requiredFields);
          if (requiredData.length > 0) {
            throwError(400, "Required data input", requiredData);
          }
    },

    searchByField: (data) => {
        let requiredFields = {
          };
          // check required fields
          let requiredData = validateRequiredFields(data, requiredFields);
          if (requiredData.length > 0) {
            throwError(400, "Required data input", requiredData);
          }
    },

    deleteBook: (data) => {
      let requiredFields = {
        "book_id": "Book Id",
      }
      let requiredData = validateRequiredFields(data, requiredFields);
      if (requiredData.length > 0) {
        throwError(400, "Required data input", requiredData);
      }
    },

    updateBookStatus: (data) => {
      let requiredFields = {
        "book_id": "Book Id",
        "status": "Status"
      };

      let requiredData = validateRequiredFields(data, requiredFields);
      if (requiredData.length > 0) {
        throwError(400, "Required data input", requiredData);
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
    },

    getAllBooksByUser: (data) => {
      let requiredFields = {
      };

      let requiredData = validateRequiredFields(data, requiredFields);
      if (requiredData.length > 0) {
        throwError(400, "Required data input", requiredData);
      }
    }
}