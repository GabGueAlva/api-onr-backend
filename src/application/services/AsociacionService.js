const AsociacionRepository = require('../../infrastructure/repositories/AsociacionRepository')

class AsociacionService {
  async createAsociacion(data) {
    return await AsociacionRepository.create(data)
  }

  async getAsociaciones() {
    return await AsociacionRepository.findAll()
  }

  async getAsociacionById(id) {
    return await AsociacionRepository.findById(id)
  }

  async updateAsociacion(id, data) {
    return await AsociacionRepository.update(id, data)
  }

  async deleteAsociacion(id) {
    return await AsociacionRepository.delete(id)
  }
}

module.exports = new AsociacionService();