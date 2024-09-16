const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");
const Employee = require("./Employee");

class TipOut extends Model {}

TipOut.init(
  {
    employeeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Employee,
        key: "employeeID",
      },
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipOut: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "TipOut",
  }
);

module.exports = TipOut;
