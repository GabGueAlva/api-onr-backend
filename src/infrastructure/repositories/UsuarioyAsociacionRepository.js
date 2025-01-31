const UsuarioAsociacion = require('../models/UsuarioyAsociacionModel')

class UsuarioAsociacionRepository {
  async create(usuarioAsociacion) {
    return await UsuarioAsociacion.create(usuarioAsociacion)
  }

  async findAll() {
    return await UsuarioAsociacion.findAll()
  }

  async findByUsuarioId(usuarioId) {
    return await UsuarioAsociacion.findAll({
      where: { usuarioId }
    });
  }

  async findByAsociacionId(asociacionId) {
    return await UsuarioAsociacion.findAll({
      where: { asociacionId }
    });
  }

  async delete(usuarioId, asociacionId) {
    return await UsuarioAsociacion.destroy({
      where: { usuarioId, asociacionId }
    });
  }
}

module.exports = new UsuarioAsociacionRepository();