const requestValidator = require('../validators/notificationValidator');
const NotificationService = require('../services/notificationService');
const notificationService = new NotificationService();
module.exports = {

    createNotification: async (req, res, next) => {
        try {
            requestValidator.createNotification(req.body);
            await notificationService.createNotification(req.body);
            return res.json({success: true, msg: "success fully added"})
        } catch (e) {
            next(e);
        }
    },

    getNotifications: async (req, res, next) => {
        try {
            requestValidator.getNotifications(req.body);
            let notifications = await notificationService.getNotifications(req.body);
            return res.json({success: true, notifications: notifications})
        } catch (e) {
            next(e);
        }
    },

    updateNotification: async (req, res, next) => {
        try {
            requestValidator.updateNotification(req.body);
            await notificationService.updateNotification(req.body);
            return res.json({success: true, msg: "Successfully updated notification"})
        } catch (e) {
            next(e);
        }
    },
     
    deleteNotification: async (req, res, next) => {
        try {
            requestValidator.deleteNotification(req.body);
            await notificationService.delteredNotification(req.body);
            return res.json({success: true, msg: "Successfully deleted"})
        } catch (e) {
            next(e);
        }
    }
}