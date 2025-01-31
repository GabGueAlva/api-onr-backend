const { Sequelize } = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(process.env.DB_DATABASEPOSTGRE, process.env.DB_USERPOSTGRE, process.env.DB_PASSWORDPOSTGRE, {
  host: process.env.DB_HOSTPOSTGRE,
  port: process.env.DB_PORTPOSTGRE,
  dialect: 'postgres',
  logging: false
})

module.exports = sequelize