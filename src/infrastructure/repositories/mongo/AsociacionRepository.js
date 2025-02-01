const Asociacion = require('../../models/mongo/AsociacionModel')

class AsociacionRepository {
    async create(asociacionData) {
        return await Asociacion.create(asociacionData)
    }
    
    async findAll() {
        return await Asociacion.find()
    }
    
    async findById(id) {
        return await Asociacion.findById(id)
    }
    
    async update(id, asociacionData) {
        return await Asociacion.findByIdAndUpdate(id, asociacionData, { new: true })
    }
    
    async delete(id) {
        return await Asociacion.findByIdAndDelete(id)
    }
}

module.exports = new AsociacionRepository();