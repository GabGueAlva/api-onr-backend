const Amenity = require('../../models/mongo/AmenityModel');

class AmenityRepository {
  async create(amenity) {
    return await Amenity.create(amenity)
  }

  async findAll() {
    return await Amenity.find().populate('associationId')  
  }

  async findById(id) {
    return await Amenity.findById(id).populate('associationId')   
  }

  async update(id, amenity) {
    return await Amenity.findByIdAndUpdate(id, amenity, { new: true })
  }

  async delete(id) {
    return await Amenity.findByIdAndDelete(id)
  }
}

module.exports = new AmenityRepository();