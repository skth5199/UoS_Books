const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    buyer_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'Book must belong to Buyer']
    },
    seller_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'A seller Id must be provided']
    },
    book_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'Book',
        required: [true, 'Book data must be provided']
    },
    number: {
        type: String,
        required: [true, 'Number must be provided for the seller communication']
    },
    address: {
        type: String,
        required: [true, 'Address must be provided']
    },
    status: {
        type: String,
        enum: ['new', "booked", "sold"],
        required: [true, 'Status must be provided'],
        default: 'new'
    }
    
},{ timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
    },
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)

bookingSchema.pre(/^find/, function(next){
    this.populate({
      path : `buyer_id`,
      select : ['first_name', 'last_name']
  })
  this.populate({
    path : `book_id`,
    select : ['title']
})
  next()
  })

module.exports = mongoose.model('Booking', bookingSchema);
