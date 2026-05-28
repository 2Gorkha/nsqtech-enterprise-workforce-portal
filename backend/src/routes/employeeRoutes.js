const express = require('express');

const router = express.Router();

const employees = require('../data/employees.json');

const dashboardData = require('../data/dashborad.json');
const tasks = require('../data/tasks.json')

const fs = require('fs');

const path = require('path');


router.get('/', (req, res) => {

  setTimeout(() => {

    res.json({

      success: true,

      employees: employees

    });

  }, 2000);

});





router.post('/add', (req, res) => {

  const newEmployee = req.body;

  employees.push(newEmployee);

  res.json({

    success: true,

    message: 'Employee Added Successfully',

    employees: employees

  });

});
router.post('/assign-task', (req, res) => {

  const newTask = req.body;



  tasks.push(newTask);



  /*
  ========================================
  SAVE TASKS TO JSON FILE
  ========================================
  */

  const tasksFilePath = path.join(

    __dirname,

    '../data/tasks.json'

  );



  fs.writeFileSync(

    tasksFilePath,

    JSON.stringify(tasks, null, 2)

  );



  res.json({

    success: true,

    message: 'Task Assigned Successfully',

    tasks: tasks

  });

});
router.get('/dashboard-data', (req, res) => {

  setTimeout(() => {

    res.json({

      success: true,

      dashboard: dashboardData

    });

  }, 2000);

});



router.put('/deactivate/:id', (req, res) => {

  const employeeId = req.params.id;

  const employee = employees.find(

    emp => emp.id === employeeId

  );



  if(employee) {

    employee.status = 'Inactive';



    /*
    ========================================
    SAVE EMPLOYEES TO JSON FILE
    ========================================
    */

    const employeesFilePath = path.join(

      __dirname,

      '../data/employees.json'

    );



    fs.writeFileSync(

      employeesFilePath,

      JSON.stringify(employees, null, 2)

    );



    return res.json({

      success: true,

      message: 'Employee Deactivated',

      employee: employee

    });

  }



  res.status(404).json({

    success: false,

    message: 'Employee Not Found'

  });

});



/*
========================================
GET TASKS
========================================
*/

router.get('/tasks', (req, res) => {

  setTimeout(() => {

    res.json({

      success: true,

      tasks: tasks

    });

  }, 1000);

});



module.exports = router;