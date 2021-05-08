const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema(
    {
        booking_id: {
            type: String,
            required: true,
            trim: true
        },
        user_id: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true
        },
        status: {
            type: String,
            required: true,
            enum: ['active', 'deactive']
        },
        message: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

module.exports = mongoose.model(`Notification`, notificationSchema);
