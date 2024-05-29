const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

router.get('/', async function(req, res, next) {

  const employees = await Employee.getEmployees();
  res.render('index', { employees: employees});

});

router.post('/create', async function(req, res, next) {
  try {
    
    let employee = await Employee.findEmployee(req.body.employeeID); 
    if (employee) {
      
      console.log('Employee already exists');
  
      return res.redirect('/?message=employee-exists');
    } else {

      Employee = await User.create({
        firstName: req.body.firstName,  
      lastName: req.body.lastName,
      employeeID: req.body.employeeID,
      position: req.body.position,
      wage: req.body.wage,
      });
      console.log('Employee created');
      
      return res.redirect('/?message=employee-created');
    }
  } catch (error) {
    console.error('Error in employee creation:', error);

    return res.redirect('/?message=error-creating-employee');
  }
});

module.exports = router;
