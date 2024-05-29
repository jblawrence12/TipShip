var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const session = require("express-session");
const sequelize = require("./db");
const Employee = require("./models/Employee");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var apiRouter = require("./routes/api");
var app = express();
const cors = require("cors");

app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api", apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
async function setup() {
  const employeeTest = await Employee.create({
    firstName: "Justin",
    lastName: "Lawrence",
    employeeID: 95,
    position: "Manager",
    wage: 24.0,
  });
  console.log("employee test instance created...");
}

sequelize.sync({ force: true }).then(() => {
  console.log("Sequelize Sync Completed...");
  setup().then(() => console.log("User setup complete"));
});
module.exports = app;
