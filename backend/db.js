const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/employeesdb1.sqlite'
})

module.exports = sequelize