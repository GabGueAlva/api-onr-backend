const BookingFlowService = require('../../application/services/flowBookingService')

class BookingFlowController {

  async create(req, res) {
    const { userId, amenityId, date, timeStart, timeEnd, associationId } = req.body

    try {
        const booking = await BookingFlowService.createBooking(userId, amenityId, date, timeStart, timeEnd, associationId)
        res.status(201).json({ message: 'Reserva creada exitosamente', booking })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
  }
}

module.exports = new BookingFlowController();