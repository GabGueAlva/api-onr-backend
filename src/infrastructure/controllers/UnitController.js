const { body, validationResult } = require('express-validator');
const UnitService = require('../../application/services/UnitService')
const AsociacionModel = require('../../infrastructure/models/AsociacionModel')


class UnitController {

  async create(req, res) {

    await body('name').notEmpty().withMessage('El nombre es obligatorio').run(req)
    await body('asociacionId').notEmpty().withMessage('La asociación es obligatoria').run(req)

    const { asociacionId } = req.body;
    
    const asociacion = await AsociacionModel.findByPk(asociacionId)
    
    if (!asociacion) {
         return res.status(400).json({message:'La asociación proporcionada no existe'})
    }

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

     try {
      const unidad = await UnitService.createUnit(req.body)
      res.status(201).json(unidad);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear la unidad', error })
    }
  }


  async getAll(req, res) {
    try {
      const unidad = await UnitService.getUnits();
      res.status(200).json(unidad);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las unidades', error });
    }
  }

  async getById(req, res) {
    const { id } = req.params

    try {
      const unidad = await UnitService.getUnitById(id)

      if (!unidad) {
        return res.status(404).json({ message: 'Unidad no encontrada' })
      }
      res.status(200).json(unidad);  
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Error al obtener la unidad', error })
    }
  }

  async update(req, res) {

    const { id } = req.params;
    const { name, asociacionId} = req.body;

    try {
    
        const asociacion = await AsociacionModel.findByPk(asociacionId)
        
        if (!asociacion) {
             return res.status(400).json({message:'La asociación proporcionada no existe'})
        }
        
        const unidad = await UnitService.updateUnit(id, {name, asociacionId })
        if (!unidad[0]) {
            return res.status(404).json({ message: 'Unidad no encontrada para actualizar' })
        }
        res.status(200).json({ message: 'Unidad actualizada exitosamente' })
        
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Error al actualizar la unidad', error })
    }
  }

  async delete(req, res) {
    const { id } = req.params
    try {
      const result = await UnitService.deleteUnit(id)
      if (!result) {
        return res.status(404).json({ message: 'Unidad no encontrado para eliminar' })
      }
      res.status(200).json({ message: 'Unidad eliminada exitosamente' })
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar la unidad', error })
    }
  }

}

module.exports = new UnitController();