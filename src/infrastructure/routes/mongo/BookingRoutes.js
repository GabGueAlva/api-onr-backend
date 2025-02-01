const express = require('express')
const BookingController = require('../../controllers/mongo/BookingController')

const router = express.Router();

router.get('/v2/getAllBooking', BookingController.getAll)
router.get('/v2/getBookingById/:id', BookingController.getById)
router.post('/v2/createBooking', BookingController.create)
router.put('/v2/updateBooking/:id', BookingController.update)
router.delete('/v2/deleteBooking/:id', BookingController.delete)

module.exports = router;