const express = require("express");
const router = express.Router();
const Payroll = require("../../models/Payroll");

// Get all payroll entries
router.get("/", async (req, res) => {
  try {
    const payrolls = await Payroll.findAll();
    res.json(payrolls);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get payroll by employeeID
router.get("/:employeeID", async (req, res) => {
  try {
    const payroll = await Payroll.findAll({ where: { employeeID: req.params.employeeID } });
    if (payroll.length > 0) {
      res.json(payroll);
    } else {
      res.status(404).json({ msg: "No payroll found for that employee" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Error retrieving payroll", error });
  }
});

// Create a payroll entry
router.post("/", async (req, res) => {
  try {
    await Payroll.create({
      employeeID: req.body.employeeID,
      hours: req.body.hours,
      dateStart: req.body.dateStart,
      dateEnd: req.body.dateEnd,
      tips: req.body.tips,
    });
    res.json({ msg: "Payroll entry created successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete a payroll entry
router.delete("/:employeeID", async (req, res) => {
  try {
    const payroll = await Payroll.findAll({ where: { employeeID: req.params.employeeID } });
    if (payroll.length > 0) {
      await Payroll.destroy({ where: { employeeID: req.params.employeeID } });
      res.status(200).send({ message: "Payroll entry removed successfully" });
    } else {
      res.status(404).send({ message: "Payroll entry not found" });
    }
  } catch (error) {
    res.status(500).send({ message: "Error removing payroll entry", error });
  }
});

module.exports = router;
