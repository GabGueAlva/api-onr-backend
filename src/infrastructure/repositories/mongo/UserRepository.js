const User = require('../../models/mongo/UserModel');

class UserRepository {
    async create(userData) {
        return await User.create(userData);
    }
    
    async findAll() {
        return await User.find().populate(['associations', 'units.unit']);
    }
    
    async findById(id) {
        return await User.findById(id).populate(['associations', 'units.unit']);
    }
    
    async update(id, userData) {
        return await User.findByIdAndUpdate(id, userData, { new: true });
    }
    
    async delete(id) {
        return await User.findByIdAndDelete(id);
    }
}

module.exports = new UserRepository();