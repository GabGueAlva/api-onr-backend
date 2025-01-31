class User {
    constructor({ id, names, lastNames, email, password }) {
      this.id = id
      this.names = names
      this.lastNames = lastNames
      this.email = email
      this.password = password
    }
  }
  module.exports = User;