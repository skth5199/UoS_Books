const mongoose = require('mongoose');
const {encrypt} = require('../utils/AuthUtils')
const validator = require('validator');
const Schema = mongoose.Schema;
const userSchema = new Schema(
    {
        first_name: {
            type: String,
            required: true,
            trim: true
        },
        last_name: {
            type: String,
            required: true,
            trim : true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            validate: [validator.isEmail, `Please enter a valid email`]
        },
        role: {
            type: String,
            enum: ['buyer', 'seller'],
            required: true
        },
        password: {
            type: String,
            required: true,
            minlength: 8,
            select: false
        }
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

userSchema.pre(`save`, async function(next) {
    if(!this.isModified(`password`)){
        return next()
    }
    //Hashing the passowrd
    this.password = encrypt(this.password)
    next()

})
module.exports = mongoose.model(`User`, userSchema)
