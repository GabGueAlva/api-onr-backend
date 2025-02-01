const UsuarioAsociacionService = require('../../../application/services/postgres/UsuarioyAsociacionService')
const AsociacionModel = require('../../../infrastructure/models/postgres/AsociacionModel')
const UserModel = require('../../../infrastructure/models/postgres/UserModel')

class UsuarioAsociacionController {
  async create(req, res) {
    try {

        const { asociacionId, usuarioId } = req.body;
    
        const asociacion = await AsociacionModel.findByPk(asociacionId)
        const user = await UserModel.findByPk(usuarioId)

        
        if (!asociacion || !user) {
            return res.status(400).json({message:'La asociación o el usuario proporcionado no existe'})
        }

        const usuarioAsociacion = await UsuarioAsociacionService.createUsuarioAsociacion(req.body)
        res.status(201).json(usuarioAsociacion)
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la asociación de usuario', error })
    }
  }

  async getAll(req, res) {
    try {
      const asociaciones = await UsuarioAsociacionService.getAll()
      res.status(200).json(asociaciones)
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las asociaciones de usuarios', error })
    }
  }

  async delete(req, res) {
    const { usuarioId, asociacionId } = req.params;
    try {
      const result = await UsuarioAsociacionService.delete(usuarioId, asociacionId)
      if (result) {
        res.status(200).json({ message: 'Asociación eliminada exitosamente' })
      } else {
        res.status(404).json({ message: 'Asociación no encontrada para eliminar' })
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar la asociación de usuario', error })
    }
  }
}

module.exports = new UsuarioAsociacionController();