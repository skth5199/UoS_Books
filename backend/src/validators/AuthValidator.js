const { validateRequiredFields, throwError } = require('../utils/Common');

module.exports = {

  getTokens: (data) => {
    let requiredFields = {
      "email": "Email",
      "password": "Password"
    };
    // check required fields
    let requiredData = validateRequiredFields(data, requiredFields);
    if (requiredData.length > 0) {
      throwError(400, "Required data input", requiredData);
    }
  },

  refreshToken: (data) => {
    let requiredFields = {
      "refresh_token": "Refresh Token"
    };
    // check required fields
    let requiredData = validateRequiredFields(data, requiredFields);
    if (requiredData.length > 0) {
      throwError(400, "Required data input", requiredData);
    }
  },
}