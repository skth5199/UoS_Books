const {registerUser, signInUser} = require('../controllers/userController');

const router = require('express').Router();

router.post('/registerUser', registerUser);

router.post('/signInUser', signInUser);

module.exports = router;