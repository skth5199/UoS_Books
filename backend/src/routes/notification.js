const { authenticate, authorize} = require('../controllers/AuthController');
const { createNotification, getNotifications,updateNotification, deleteNotification } = require('../controllers/notificationController');

const router = require('express').Router();

router.post('/createNotification', authenticate, authorize("all"), createNotification)

router.post('/getNotifications', authenticate, authorize("all"), getNotifications)

router.post('/updateNotifications', authenticate, authorize("all"), updateNotification)

router.post('/deleteNotifications', authenticate, authorize("all"), deleteNotification)


module.exports = router;