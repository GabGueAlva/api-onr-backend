const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');
const AsociacionService = require('../../../application/services/postgres/AsociacionService')
const AmenityService = require('../../../application/services/mongo/AmenityService')

class AmenityController {

  async create(req, res) {

    const amenityData = req.body
    
    await body('name').notEmpty().withMessage('El nombre es obligatorio').run(req)
    await body('associationId').notEmpty().withMessage('La asociación es obligatoria').run(req)

    if (amenityData.associationId) {
        const asociacion = await AsociacionService.getAsociacionById(amenityData.associationId)
        if (!asociacion) {
            return res.status(404).json({ message: 'La Asociación no existe' })
        }
    }

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

     try {
        const amenity = await AmenityService.createAmenity(amenityData)
        res.status(201).json(amenity);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el amenity', error })
    }
  }


  async getAll(req, res) {
    try {
        const amenities = await AmenityService.getAmenity();
        res.status(200).json(amenities);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los amenities', error });
    }
  }

  async getById(req, res) {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'ID inválido' });
    }

    try {
        const unidad = await AmenityService.getAmenityById(id)

        if (!unidad) {
            return res.status(404).json({ message: 'Amenity no encontrado' })
        }
        res.status(200).json(unidad);  
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error al obtener el amenity', error })
    }
  }

  async update(req, res) {

    const { id } = req.params;
    const amenityData = req.body;

    try {
    
        if (amenityData.associationId) {
            const asociacion = await Asociacion.findById(amenityData.associationId)
            if (!asociacion) {
                return res.status(404).json({ message: 'La Asociación no existe' })
            }
        }
    
        const amenity = await AmenityService.updateAmenity(id, amenityData);
        if (!amenity) {
            return res.status(404).json({ message: 'Amenity no encontrado para actualizar' })
        }
        res.status(200).json({ message: 'Amenity actualizado exitosamente' })
        
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Error al actualizar el amenity', error })
    }
  }

  async delete(req, res) {
    const { id } = req.params
    try {
      const result = await AmenityService.deleteAmenity(id)
      if (!result) {
        return res.status(404).json({ message: 'Amenity no encontrado para eliminar' })
      }
      res.status(200).json({ message: 'Amenity eliminado exitosamente' })
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el Amenity', error })
    }
  }

}

module.exports = new AmenityController();