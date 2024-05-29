const express = require("express");
const router = express.Router();
const employeeApi = require("./apiroutes/employeeapi");

router.use("/employee", employeeApi);

router.get("/", (req, res) => {
  res.send("in api route");
});

module.exports = router;