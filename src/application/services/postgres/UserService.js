const UsuarioRepository = require('../../../infrastructure/repositories/postgres/UserRepository')

class UsuarioService {
  async createUsuario(data) {
    return await UsuarioRepository.create(data)
  }

  async getUsuarios() {
    return await UsuarioRepository.findAll()
  }

  async getUsuarioById(id) {
    return await UsuarioRepository.findById(id)
  }

  async updateUsuario(id, data) {
    return await UsuarioRepository.update(id, data)
  }

  async deleteUsuario(id) {
    return await UsuarioRepository.delete(id)
  }
}

module.exports = new UsuarioService();