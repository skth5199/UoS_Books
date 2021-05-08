// routes/Auth
const { getTokens } = require("../controllers/AuthController");

const router = require('express').Router();

// individual auth routes
// /auth/getTokens
router.post('/getTokens', getTokens);

module.exports = router;  