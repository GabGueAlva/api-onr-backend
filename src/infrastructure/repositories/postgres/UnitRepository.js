const UnidadModel = require('../../models/postgres/UnidadModel');

class UnitRepository {
  async create(unit) {
    return await UnidadModel.create(unit)
  }

  async findAll() {
    return await UnidadModel.findAll()
  }

  async findById(id) {
    return await UnidadModel.findByPk(id)
  }

  async update(id, unit) {
    return await UnidadModel.update(unit, { where: { id } })
  }

  async delete(id) {
    return await UnidadModel.destroy({ where: { id } })
  }
}

module.exports = new UnitRepository();