const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const AsociacionModel = sequelize.define('Asociacion', {
  name: { type: DataTypes.STRING, allowNull: false },
  address: { type: DataTypes.STRING }
});

module.exports = AsociacionModel;