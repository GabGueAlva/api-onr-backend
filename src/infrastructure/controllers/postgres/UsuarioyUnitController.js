const UsuarioUnidadService = require('../../../application/services/postgres/UsuarioyUnidadesService')
const UnidadModel = require('../../../infrastructure/models/postgres/UnidadModel')
const UserModel = require('../../../infrastructure/models/postgres/UserModel')

class UsuarioUnidadController {
  async create(req, res) {
    try {

        const { unidadId, usuarioId } = req.body;
    
        const unit = await UnidadModel.findByPk(unidadId)
        const user = await UserModel.findByPk(usuarioId)

        
        if (!unit || !user) {
            return res.status(400).json({message:'La unidad o el usuario proporcionado no existe'})
        }

        const usuarioUnidad = await UsuarioUnidadService.createUsuarioUnidad(req.body)
        res.status(201).json(usuarioUnidad);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error al crear la unidad de usuario', error })
    }
  }

  async getAll(req, res) {
    try {
        const unidades = await UsuarioUnidadService.getAll()
        res.status(200).json(unidades)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las unidades de usuario', error })
    }
  }

  async delete(req, res) {
    const { usuarioId, unidadId } = req.params;
    try {
        const result = await UsuarioUnidadService.delete(usuarioId, unidadId)
        if (result) {
            res.status(200).json({ message: 'Unidad eliminada exitosamente' })
        } else {
            res.status(404).json({ message: 'Unidad no encontrada para eliminar' })
        }
    } catch (error) {
         res.status(500).json({ message: 'Error al eliminar la unidad de usuario', error })
    }
  }
}

module.exports = new UsuarioUnidadController();