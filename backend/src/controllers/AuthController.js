const requestValidator = require('../validators/AuthValidator');
const { throwError } = require("../utils/Common");
const { verifyJWT, verifyBT } = require("../utils/AuthUtils");
const AuthService = require("../services/AuthService");
const authService = new AuthService();

module.exports = {
  getTokens: async (req, res, next) => {
    try {
      requestValidator.getTokens(req.body);
      let { token } = await authService.getTokens(req.body);
      return res.json({ success: true, token, refreshToken });
    }
    catch (e) {
      next(e)
    }
  },

  authenticate: async (req, res, next) => {
    try {
      if (req.headers && req.headers.authorization) {
        if (req.headers.authorization.split(' ')[0] === 'JWT') {
          let token = req.headers.authorization.split(' ')[1];
          let user = await verifyJWT(token);
          req.body._user = user;
          return next();
        }
        else if (req.headers.authorization.split(' ')[0] === 'Bearer') {
          let token = req.headers.authorization.split(' ')[1];
          let user = verifyBT(token);
          if (!req.body._user) req.body._user = user;
          return next();
        }
      }
      throwError(401, 'Authorization Header Not Present');
    }
    catch (e) {
      next(e)
    }
  },

  authorize: (role, limiterType = "short") => {
    return async (req, res, next) => {
      try {
        if (role == "all"
          || req.body._user.role == "admin" 
          || role == req.body._user.role) {
          next();
        }
        else throwError(403, "Unauthorized");
      }
      catch (e) {
        next(e);
      }
    }
  },

}
