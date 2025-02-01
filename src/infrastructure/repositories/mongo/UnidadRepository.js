const Unidad = require('../../models/mongo/UnidadModel');

class UnitRepository {
  async create(unit) {
    return await Unidad.create(unit)
  }

  async findAll() {
    return await Unidad.find().populate('association').populate('owners').populate('residents')     
  }

  async findById(id) {
    return await Unidad.findById(id).populate('association').populate('owners').populate('residents')   
  }

  async update(id, unit) {
    return await Unidad.findByIdAndUpdate(id, unit, { new: true })
  }

  async delete(id) {
    return await Unidad.findByIdAndDelete(id)
  }
}

module.exports = new UnitRepository();