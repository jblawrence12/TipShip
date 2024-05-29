var express = require('express');
var router = express.Router();
const Employee = require('../models/Employee')

const sessionChecker = (req, res, next)=>{
  if(req.session.employee){
    next()
  }else{
    res.redirect('/')
  }
}

router.use(sessionChecker)

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const employee = await Employee.findAll();
    res.render('index', { employees: employees }); 
  } catch (error) {
    console.error('Failed to fetch employees:', error);
    res.render('index', { employees: [] }); 
  }
});

router.post('/create', async function(req, res, next) {
  try {
    await Employee.create(
      {
        firstName: req.body.firstName,  
        lastName: req.body.lastName,
        employeeID: req.body.employeeID,
        position: req.body.position,
        wage: req.body.wage,
      }
  )
  res.redirect('/')
  } catch (error) {
  res.redirect('/') 
  }
});

module.exports = router;