const UsuarioUnidad = require('../../models/postgres/UsuarioyUnidadModel')

class UsuarioUnidadRepository {
  async create(usuarioUnidad) {
    return await UsuarioUnidad.create(usuarioUnidad)
  }

  async findAll() {
    return await UsuarioUnidad.findAll()
  }

  async findByUsuarioId(usuarioId) {
    return await UsuarioUnidad.findAll({
      where: { usuarioId }
    });
  }

  async findByUnidadId(unidadId) {
    return await UsuarioUnidad.findAll({
      where: { unidadId }
    });
  }

  async delete(usuarioId, unidadId) {
    return await UsuarioUnidad.destroy({
      where: { usuarioId, unidadId }
    });
  }
}

module.exports = new UsuarioUnidadRepository();