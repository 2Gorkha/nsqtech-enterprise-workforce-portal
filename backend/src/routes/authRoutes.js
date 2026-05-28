const express = require('express');

const router = express.Router();

const users = require('../data/users.json');



/*
========================================
LOGIN API
========================================
*/

router.post('/login', (req, res) => {

  const { userId, password, role } = req.body;



  const foundUser = users.find(user =>

    user.userId === userId &&
    user.password === password &&
    user.role === role

  );



  if(foundUser) {

    return res.json({

      success: true,

      user: foundUser

    });

  }



  res.status(401).json({

    success: false,

    message: 'Invalid Credentials'

  });

});



module.exports = router;