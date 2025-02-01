const BookingRepository = require('../../../infrastructure/repositories/mongo/BookingRepository');

class BookingService {
  async createBooking(data) {

    return await BookingRepository.create(data)
  }

  async getBookings() {
    return await BookingRepository.findAll()
  }

  async getBookingById(id) {
    return await BookingRepository.findById(id)
  }

  async updateBooking(id, data) {
    return await BookingRepository.update(id, data)
  }

  async deleteBooking(id) {
    return await BookingRepository.delete(id)
  }
}

module.exports = new BookingService();