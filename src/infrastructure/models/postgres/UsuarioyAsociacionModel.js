const { DataTypes } = require('sequelize')
const sequelize = require('../../../config/database')
const UsuarioModel = require('../../models/postgres/UserModel')
const AsociacionModel = require('../../models/postgres/AsociacionModel')

const UsuarioAsociacion = sequelize.define('UsuarioAsociacions', {
  usuarioId: {
    type: DataTypes.INTEGER,
    references: {
      model: UsuarioModel,
      key: 'id'
    },
    allowNull: false
  },
  asociacionId: {
    type: DataTypes.INTEGER,
    references: {
      model: AsociacionModel,
      key: 'id'
    },
    allowNull: false
  }
})

UsuarioAsociacion.belongsTo(UsuarioModel, { foreignKey: 'usuarioId' });
UsuarioAsociacion.belongsTo(AsociacionModel, { foreignKey: 'asociacionId' });

module.exports = UsuarioAsociacion;