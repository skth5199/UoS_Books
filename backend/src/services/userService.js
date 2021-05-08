const UserDAO = require('../DAO/userDAO');
const userDAO = new UserDAO();

class UserService {
    async registerUser(data) {
        return await userDAO.registerUser(data);
    }

    async signInUser(data) {
        return await userDAO.signInUser(data);
    }
}
module.exports = UserService;