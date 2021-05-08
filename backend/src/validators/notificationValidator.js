const { throwError, validateRequiredFields} = require('../utils/Common');

module.exports = {

    createNotification: (data) => {
        let requiredFields = {};
        let requiredData = validateRequiredFields(data, requiredField);
        if (requiredData.length > 0) {
            throwError(400, "Required data input", requiredData)
        }
    },

    getNotifications: (data) => {
        let requiredFields = {};
        let requiredData = validateRequiredFields(data, requiredFields);
        if (requiredData.length > 0) {
            throwError(400, "Required data input", requiredData)
        }
    },

    updateNotification: (data) => {
        let requiredFields = {
            "notificaion_id": "Notificacion Id"
        };
        let requiredData = validateRequiredFields(data, requiredField);
        if (requiredData.length > 0) {
            throwError(400, "Required data input", requiredData)
        }
    },

    deleteNotification: (data) => {
        let requiredFields = {
            "notification_id": "Notificacion Id"
        };
        let requiredData = validateRequiredFields(data, requiredField);
        if (requiredData.length > 0) {
            throwError(400, "Required data input", requiredData)
        }
    }
}