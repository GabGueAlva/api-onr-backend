const UnitRepository = require('../../../infrastructure/repositories/postgres/UnitRepository');

class UnitService {
  async createUnit(data) {

    return await UnitRepository.create(data)
  }

  async getUnits() {
    return await UnitRepository.findAll()
  }

  async getUnitById(id) {
    return await UnitRepository.findById(id)
  }

  async updateUnit(id, data) {
    return await UnitRepository.update(id, data)
  }

  async deleteUnit(id) {
    return await UnitRepository.delete(id)
  }
}

module.exports = new UnitService();