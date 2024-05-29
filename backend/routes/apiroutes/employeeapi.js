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
  const employee = await Employee.findEmployee(req.params.employeeID);
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ msg: "employee with that id does not exist" });
  }
});

router.delete("/:employeeID", async function (req, res, next) {
  const employee = await Employee.findEmployee(req.params.employeeID);
  if (employee) {
    await employee.destroy();
    res.json({ msg: `employee ${req.params.employeeID} deleted succesfully` });
  } else {
    res.status(404).json({ msg: "employee with that id does not exist" });
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
    });
    res.json({ msg: `employee ${req.body.employeeID} created succesfully` });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;