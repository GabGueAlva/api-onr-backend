const mongoose = require('mongoose');

const UserModel = require('../models/postgres/UserModel')
const AsociacionModel = require('../models/postgres/AsociacionModel')
const UsuarioAsociacion = require('../models/postgres/UsuarioyAsociacionModel')

const Booking = require('../models/mongo/BookingModel')
const Amenity = require('../models/mongo/AmenityModel')

class BookingFlowRepository {

    async getUserById(userId) {
      return await UserModel.findOne({
        where: { id: userId },
        include: [{
          model: AsociacionModel,
          through: { attributes: [] }
        }]
      })
    }
    
    async isUserInAssociation(userId, associationId) {
        console.log("Holaaa")
      const usuarioAsociacion = await UsuarioAsociacion.findOne({
        where: {
          usuarioId: userId,
          asociacionId: associationId
        }
      })
      return usuarioAsociacion !== null;
    }
  
    async getAmenityByIdAndAssociationId(amenityId, associationId) {
        console.log(amenityId, associationId)
      return await Amenity.findOne({
        _id: new mongoose.Types.ObjectId(amenityId),
        associationId: associationId
      })
    }
  
    async createBooking(bookingData) {
      return await Booking.create(bookingData);
    }
  }
  
  module.exports = new BookingFlowRepository();