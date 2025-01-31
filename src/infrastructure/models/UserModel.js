const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const UnidadModel = require('../models/UnidadModel')
const AsociacionModel = require('../models/AsociacionModel')

const UserModel = sequelize.define('Usuario', {
  names: { type: DataTypes.STRING, allowNull: false },
  lastNames: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false }
})

UserModel.belongsToMany(UnidadModel, { through: 'UsuarioUnidads', foreignKey: 'unidadId' })
UserModel.belongsToMany(AsociacionModel, { through: 'UsuarioAsociacions', foreignKey: 'asociacionId' })

module.exports = UserModel;