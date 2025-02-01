const mongoose = require('mongoose');

const AmenitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    bookable: Boolean,
    openingTime: String,
    closingTime: String,
    associationId: { type: Number, required: true }
})

module.exports = mongoose.model('Amenity', AmenitySchema)