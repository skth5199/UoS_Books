const { throwError } = require('../utils/Common');
const Notification = require('../models/notificationModel');

class NotificationDAO {
    async createNotification(data){
        await Notification.create(data)
    }

    async getNotifications(data) {
        const notifications = await Notification.find({user_id: data._user.id}).where({status: 'active'}).select(['status', 'message']);
        return notifications;
    }

    async updateNotification(data) {
        await Notification.findByIdAndUpdate(data['notification_id']).where({status: data['status']});
    }

    async deleteNotification(data) {
        await Notification.findByIdAndDelete(data['notification_id']);
    }
}

module.exports = NotificationDAO;