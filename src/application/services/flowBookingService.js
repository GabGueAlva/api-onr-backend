const BookingFlowRepository = require('../../infrastructure/repositories/bookingFlowRepository')

class BookingFlowService {

    async createBooking(userId, amenityId, date, timeStart, timeEnd, associationId) {
        try {

            const usuario = await BookingFlowRepository.getUserById(userId);

            if (!usuario) {
                throw new Error('Usuario no encontrado en PostgreSQL')
            }

            const isUserInAssociation = await BookingFlowRepository.isUserInAssociation(userId, associationId);
            if (!isUserInAssociation) {
                throw new Error('El usuario no está asociado a esta asociación.')
            }

            console.log(amenityId, associationId)
            const amenity = await BookingFlowRepository.getAmenityByIdAndAssociationId(amenityId, associationId);
            if (!amenity) {
                throw new Error('Amenity no encontrado en la asociación del usuario');
            }

            console.log("amenity", amenity)

            const bookingData = {
                userId,
                amenityId,
                date,
                timeStart,
                timeEnd
            };

            const booking = await BookingFlowRepository.createBooking(bookingData)

            return booking;
        } catch (error) {
            throw new Error(`Error al crear la reserva: ${error.message}`)
        }
    }
}

module.exports = new BookingFlowService();