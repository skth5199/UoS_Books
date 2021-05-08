const { validateRequiredFields, throwError } = require('../utils/Common');
module.exports = {

    registerUser: (data) => {
      let requiredFields = {
        "first_name": "First Name",
        "last_name": "Last Name",
        "email": "Email",
        "password": "Password",
        "confirm_password": "Confirm Password",
        "role": "Role"
      };
      // check required fields
      let requiredData = validateRequiredFields(data, requiredFields);
      if (requiredData.length > 0) {
        throwError(400, "Required data input", requiredData);
      }
    },

    signInUser: (data) => {
        let requiredFields = {
          "email": "Email",
          "password": "Password",
        };
        // check required fields
        let requiredData = validateRequiredFields(data, requiredFields);
        if (requiredData.length > 0) {
          throwError(400, "Required data input", requiredData);
        }
      },
  }