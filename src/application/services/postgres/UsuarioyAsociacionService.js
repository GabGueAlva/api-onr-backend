const UsuarioAsociacionRepository = require('../../../infrastructure/repositories/postgres/UsuarioyAsociacionRepository')

class UsuarioAsociacionService {
  async createUsuarioAsociacion(data) {
    return await UsuarioAsociacionRepository.create(data)
  }

  async getAll() {
    return await UsuarioAsociacionRepository.findAll()
  }

  async getByUsuarioId(usuarioId) {
    return await UsuarioAsociacionRepository.findByUsuarioId(usuarioId)
  }

  async getByAsociacionId(asociacionId) {
    return await UsuarioAsociacionRepository.findByAsociacionId(asociacionId)
  }

  async delete(usuarioId, asociacionId) {
    return await UsuarioAsociacionRepository.delete(usuarioId, asociacionId)
  }
}

module.exports = new UsuarioAsociacionService();