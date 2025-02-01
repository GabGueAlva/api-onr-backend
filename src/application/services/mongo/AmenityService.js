const AmenityRepository = require('../../../infrastructure/repositories/mongo/AmenityRepository');

class AmenityService {
  async createAmenity(data) {

    return await AmenityRepository.create(data)
  }

  async getAmenity() {
    return await AmenityRepository.findAll()
  }

  async getAmenityById(id) {
    return await AmenityRepository.findById(id)
  }

  async updateAmenity(id, data) {
    return await AmenityRepository.update(id, data)
  }

  async deleteAmenity(id) {
    return await AmenityRepository.delete(id)
  }
}

module.exports = new AmenityService();