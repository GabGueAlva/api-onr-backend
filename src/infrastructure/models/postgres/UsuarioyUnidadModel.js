const { DataTypes } = require('sequelize')
const sequelize = require('../../../config/database')
const UsuarioModel = require('../../models/postgres/UserModel')
const UnidadModel = require('../../models/postgres/UnidadModel')

const UsuarioUnidad = sequelize.define('UsuarioUnidad', {
  usuarioId: {
    type: DataTypes.INTEGER,
    references: {
      model: UsuarioModel,
      key: 'id'
    },
    allowNull: false
  },
  unidadId: {
    type: DataTypes.INTEGER,
    references: {
      model: UnidadModel,
      key: 'id'
    },
    allowNull: false
  },
})

UsuarioUnidad.belongsTo(UsuarioModel, { foreignKey: 'usuarioId' });
UsuarioUnidad.belongsTo(UnidadModel, { foreignKey: 'unidadId' });

module.exports = UsuarioUnidad;