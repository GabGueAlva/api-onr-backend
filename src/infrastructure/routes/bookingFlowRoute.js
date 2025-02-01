const express = require('express')
const BookingFlowController = require('../controllers/flowBookingController')

const router = express.Router();

router.post('/createBooking', BookingFlowController.create)

module.exports = router;