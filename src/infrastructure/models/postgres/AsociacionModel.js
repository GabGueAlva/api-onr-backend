const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const AsociacionModel = sequelize.define('Asociacion', {
  name: { type: DataTypes.STRING, allowNull: false },
  address: { type: DataTypes.STRING }
});

// AsociacionModel.belongsToMany(UserModel, {through: 'UsuarioAsociacion', foreignKey: 'asociacionId', otherKey: 'usuarioId'       });
module.exports = AsociacionModel;