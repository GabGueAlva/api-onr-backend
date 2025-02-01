const Booking = require('../../models/mongo/BookingModel');

class BookingRepository {
  async create(booking) {
    return await Booking.create(booking)
  }

  async findAll() {
    return await Booking.find().populate('amenityId')
  }

  async findById(id) {
    return await Booking.findById(id).populate('amenityId')
  }

  async update(id, booking) {
    return await Booking.findByIdAndUpdate(id, booking, { new: true })
  }

  async delete(id) {
    return await Booking.findByIdAndDelete(id)
  }
}

module.exports = new BookingRepository();