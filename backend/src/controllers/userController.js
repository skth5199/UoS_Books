const requestValidator = require('../validators/userValidator');
const UserService = require('../services/userService');
const userService = new UserService();
module.exports = {
    registerUser: async (req, res, next) => {
        try {
            requestValidator.registerUser(req.body);
            let user = await userService.registerUser(req.body);
            return res.json({success: true, user: user});
        } catch (e) {
            next(e);
        }
    },

    signInUser: async (req, res, next) => {
        try {
            requestValidator.signInUser(req.body);
            let user = await userService.signInUser(req.body);
            return res.json({success: true, user: user});
        } catch(e) {
            next(e);
        }
    }
}