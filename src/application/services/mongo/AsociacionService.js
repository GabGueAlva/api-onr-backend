const AsociacionRepository = require('../../../infrastructure/repositories/mongo/AsociacionRepository');

class AsociacionService {
    async createAsociacion(asociacionData) {
        return await AsociacionRepository.create(asociacionData);
    }
    async getAsociaciones() {
        return await AsociacionRepository.findAll();
    }
    async getAsociacionById(id) {
        return await AsociacionRepository.findById(id);
    }
    async updateAsociacion(id, asociacionData) {
        return await AsociacionRepository.update(id, asociacionData);
    }
    async deleteAsociacion(id) {
        return await AsociacionRepository.delete(id);
    }
}

module.exports = new AsociacionService();