const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee.controller');

//get list of employees
router.get('/', employeeController.getEmployeeList);

//to get employee details by ID
router.get('/:id', employeeController.getEmployeeByID);

//to search employee 
router.get('/searchRecords/:first_name', employeeController.getEmployeeByName);

 //create new employee
router.post('/', employeeController.createNewEmployee);

//update employee records
router.put('/:id', employeeController.updateEmployee);

//delete employee
router.delete('/:id', employeeController.deleteEmployee);


 
module.exports = router;