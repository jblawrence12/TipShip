const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");
const Employee = require("./Employee");

class Payroll extends Model {}

Payroll.init(
  {
    payrollID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    employeeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Employee,
        key: "employeeID",
      },
    },
    hours: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    dateStart: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    dateEnd: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    tips: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Payroll",
  }
);

module.exports = Payroll;
