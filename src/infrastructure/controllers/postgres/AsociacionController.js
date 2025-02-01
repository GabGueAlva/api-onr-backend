const { body, validationResult } = require('express-validator')
const AsociacionService = require('../../../application/services/postgres/AsociacionService')

class AsociacionController {

  async create(req, res) {

    await body('name').notEmpty().withMessage('El nombre es obligatorio').matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/).withMessage('El nombre solo puede contener letras').run(req)

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

     try {
      const asociacion = await AsociacionService.createAsociacion(req.body)
      res.status(201).json(asociacion);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear la asociación', error })
    }
  }


  async getAll(req, res) {
    try {
      const asociacion = await AsociacionService.getAsociaciones();
      res.status(200).json(asociacion);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las asociaciones', error });
    }
  }

  async getById(req, res) {
    const { id } = req.params

    try {
      const asociacion = await AsociacionService.getAsociacionById(id)

      if (!asociacion) {
        return res.status(404).json({ message: 'Asociación no encontrada' })
      }
      res.status(200).json(asociacion);  
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Error al obtener la asociación', error })
    }
  }

  async update(req, res) {

    const { id } = req.params;
    const { name, address} = req.body;

    await body('name').matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/).withMessage('El nombre solo puede contener letras').run(req)

    try {
      const asociacion = await AsociacionService.updateAsociacion(id, {name, address })
      if (!asociacion[0]) {
        return res.status(404).json({ message: 'Asociación no encontrada para actualizar' })
      }
      res.status(200).json({ message: 'Asociación actualizada exitosamente' })
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Error al actualizar la asociación', error })
    }
  }

  async delete(req, res) {
    const { id } = req.params
    try {
      const result = await AsociacionService.deleteAsociacion(id)
      if (!result) {
        return res.status(404).json({ message: 'Asociación no encontrado para eliminar' })
      }
      res.status(200).json({ message: 'Asociación eliminada exitosamente' })
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar la sociación', error })
    }
  }

}

module.exports = new AsociacionController();