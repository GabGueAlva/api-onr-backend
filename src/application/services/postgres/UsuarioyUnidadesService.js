const UsuarioUnidadRepository = require('../../../infrastructure/repositories/postgres/UsuarioyUnidadesRepository')

class UsuarioUnidadService {
  async createUsuarioUnidad(data) {
    return await UsuarioUnidadRepository.create(data)
  }

  async getAll() {
    return await UsuarioUnidadRepository.findAll()
  }

  async getByUsuarioId(usuarioId) {
    return await UsuarioUnidadRepository.findByUsuarioId(usuarioId)
  }

  async getByUnidadId(unidadId) {
    return await UsuarioUnidadRepository.findByUnidadId(unidadId)
  }

  async delete(usuarioId, unidadId) {
    return await UsuarioUnidadRepository.delete(usuarioId, unidadId)
  }
}

module.exports = new UsuarioUnidadService();