const { DataTypes } = require('sequelize')
const sequelize = require('../../../config/database')
const AsociacionModel = require('./AsociacionModel')

const UnidadModel = sequelize.define('Unidad', {
  name: { type: DataTypes.STRING, allowNull: false },
  asociacionId: {  type: DataTypes.INTEGER, allowNull: false,
    references: {
      model: AsociacionModel,  
      key: 'id'
    }
  }
});

UnidadModel.belongsTo(AsociacionModel, { foreignKey: 'asociacionId' });

module.exports = UnidadModel;