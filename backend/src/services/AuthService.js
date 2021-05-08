const { throwError } = require('../utils/Common');
const { decrypt, generateJWT } = require('../utils/AuthUtils');
const AuthDAO = require('../DAO/AuthDAO');
const authDAO = new AuthDAO();

class AuthService {

  async getTokens(payload) {
  }
}

module.exports = AuthService;
