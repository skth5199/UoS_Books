const NotificationDAO = require('../DAO/notificationDAO');
const notificationDAO = new NotificationDAO();

class NotificationService {

    async createNotification(data) {
        return await notificationDAO.createNotification(data)
    }

    async getNotifications(data) {
        return await notificationDAO.getNotifications(data)
    }

    async updateNotification(data) {
        return await notificationDAO.updateNotification(data)
    }

    async deleteNotification(data) {
        return await notificationDAO.deleteNotification(data)
    }
}

module.exports = NotificationService;