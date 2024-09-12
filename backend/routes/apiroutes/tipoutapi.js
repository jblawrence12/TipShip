const express = require("express");
const router = express.Router();
const TipOut = require("../../models/TipOut");

// Get all tip-out entries
router.get("/", async (req, res) => {
  try {
    const tipOuts = await TipOut.findAll();
    res.json(tipOuts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get tip-out by employeeID
router.get("/:employeeID", async (req, res) => {
  try {
    const tipOut = await TipOut.findAll({ where: { employeeID: req.params.employeeID } });
    if (tipOut.length > 0) {
      res.json(tipOut);
    } else {
      res.status(404).json({ msg: "No tip-out found for that employee" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Error retrieving tip-out", error });
  }
});

// Create a tip-out entry
router.post("/", async (req, res) => {
  try {
    await TipOut.create({
      employeeID: req.body.employeeID,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      position: req.body.position,
      tipOut: req.body.tipOut,
    });
    res.json({ msg: "Tip-out entry created successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete a tip-out entry
router.delete("/:employeeID", async (req, res) => {
  try {
    const tipOut = await TipOut.findAll({ where: { employeeID: req.params.employeeID } });
    if (tipOut.length > 0) {
      await TipOut.destroy({ where: { employeeID: req.params.employeeID } });
      res.status(200).send({ message: "Tip-out entry removed successfully" });
    } else {
      res.status(404).send({ message: "Tip-out entry not found" });
    }
  } catch (error) {
    res.status(500).send({ message: "Error removing tip-out entry", error });
  }
});

module.exports = router;
