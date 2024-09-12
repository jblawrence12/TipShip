const express = require("express");
const router = express.Router();
const Employee = require("../../models/Employee");

router.get("/", async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:employeeID", async function (req, res, next) {
  try {
    const employee = await Employee.findEmployee(req.params.employeeID);
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json({ msg: "employee with that id does not exist" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Error retrieving employee", error });
  }
});

router.delete('/:employeeID', async (req, res) => {
  const { employeeID } = req.params;
  try {
    const result = await Employee.deleteEmployee(employeeID);
    if (result) {
      res.status(200).send({ message: 'Employee removed successfully' });
    } else {
      res.status(404).send({ message: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Error removing employee', error });
  }
});

router.post("/", async function (req, res, next) {
  try {
    await Employee.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      employeeID: req.body.employeeID,
      position: req.body.position,
      wage: req.body.wage,
      tipOutOverride: req.body.tipOutOverride,
    });
    res.json({ msg: `employee ${req.body.employeeID} created successfully` });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
