const UserModel = require('../models/UserModel');

class UsuarioRepository {
  async create(usuario) {
    return await UserModel.create(usuario)
  }

  async findAll() {
    return await UserModel.findAll()
  }

  async findById(id) {
    return await UserModel.findByPk(id)
  }

  async update(id, usuario) {
    return await UserModel.update(usuario, { where: { id } })
  }

  async delete(id) {
    return await UserModel.destroy({ where: { id } })
  }
}

module.exports = new UsuarioRepository();