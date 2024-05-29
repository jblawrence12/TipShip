const sequelize = require("../db");
const { Model, DataTypes } = require("sequelize");

class Employee extends Model {
  static async findEmployee(employeeID) {
    try {
      const employee = await Employee.findByPk(employeeID);
      if (employee && employee.employeeID === employeeID) {
        return employee;
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  static async getEmployees() {
    const employees = await Employee.findAll();
    return employees;
  }
}

Employee.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employeeID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    wage: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Employee",
  }
);

module.exports = Employee;
