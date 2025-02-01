const AsociacionModel = require('../../models/postgres/AsociacionModel')

class AsociacionRepository {
  async create(asociacion) {
    return await AsociacionModel.create(asociacion)
  }

  async findAll() {
    return await AsociacionModel.findAll()
  }

  async findById(id) {
    return await AsociacionModel.findByPk(id)
  }

  async update(id, asociacion) {
    return await AsociacionModel.update(asociacion, { where: { id } })
  }

  async delete(id) {
    return await AsociacionModel.destroy({ where: { id } })
  }
}

module.exports = new AsociacionRepository();