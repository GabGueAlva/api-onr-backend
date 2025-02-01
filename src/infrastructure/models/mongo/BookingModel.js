const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    timeStart: String,
    timeEnd: String,
    userId: { type: Number, required: true }, 
    amenityId: { type: mongoose.Schema.Types.ObjectId, ref: 'Amenity', required: true }
})

module.exports = mongoose.model('Booking', BookingSchema)