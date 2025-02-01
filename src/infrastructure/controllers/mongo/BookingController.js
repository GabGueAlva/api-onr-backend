const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');
const User = require('../../models/mongo/UserModel')
const Amenity = require('../../models/mongo/AmenityModel')
const BookingService = require('../../../application/services/mongo/BookingService')

class BookingController {

  async create(req, res) {

    const bookingData = req.body
    
    await body('date').notEmpty().withMessage('La fecha para el booking es obligatoria').run(req)
    await body('userId').notEmpty().withMessage('Debe relacionar el booking con un usuario').run(req)
    await body('amenityId').notEmpty().withMessage('Debe relacionar el booking con un amenity').run(req)

    if (bookingData.userId) {
        const user = await User.findById(bookingData.userId)
        if (!user) {
            return res.status(404).json({ message: 'El usuario no existe' })
        }
    }

    if (bookingData.amenityId) {
        const amenity = await Amenity.findById(bookingData.amenityId)
        if (!amenity) {
            return res.status(404).json({ message: 'El amenity no existe' })
        }
    }

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

     try {
        const booking = await BookingService.createBooking(bookingData)
        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el booking', error })
    }
  }


  async getAll(req, res) {
    try {
        const bookings = await BookingService.getBookings();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los bookings', error });
    }
  }

  async getById(req, res) {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'ID inválido' });
    }

    try {
        const booking = await BookingService.getBookingById(id)

        if (!booking) {
            return res.status(404).json({ message: 'Booking no encontrada' })
        }
        res.status(200).json(unidad);  
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error al obtener el booking', error })
    }
  }

  async update(req, res) {

    const { id } = req.params
    const bookingData = req.body

    try {

        if (bookingData.userId) {
            const user = await User.findById(bookingData.userId)
            if (!user) {
                return res.status(404).json({ message: 'El usuario no existe' })
            }
        }
    
        if (bookingData.amenityId) {
            const amenity = await Amenity.findById(bookingData.amenityId)
            if (!amenity) {
                return res.status(404).json({ message: 'El amenity no existe' })
            }
        }    

        const booking = await BookingService.updateBooking(id, bookingData);
        if (!booking) {
            return res.status(404).json({ message: 'Booking no encontrado para actualizar' })
        }
        res.status(200).json({ message: 'Booking actualizado exitosamente' })
        
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Error al actualizar el booking', error })
    }
  }

  async delete(req, res) {
    const { id } = req.params
    try {
      const result = await BookingService.deleteBooking(id)
      if (!result) {
        return res.status(404).json({ message: 'Booking no encontrado para eliminar' })
      }
      res.status(200).json({ message: 'Booking eliminado exitosamente' })
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el booking', error })
    }
  }

}

module.exports = new BookingController();