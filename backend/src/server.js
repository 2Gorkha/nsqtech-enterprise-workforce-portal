const express = require('express');

const cors = require('cors');

const authRoutes = require('./routes/authRoutes');

const employeeRoutes = require('./routes/employeeRoutes');

const app = express();



/*
========================================
MIDDLEWARE
========================================
*/

app.use(cors());

app.use(express.json());



/*
========================================
ROUTES
========================================
*/

app.use('/api/auth', authRoutes);

app.use('/api/employees', employeeRoutes);



/*
========================================
TEST ROUTE
========================================
*/

app.get('/', (req, res) => {

  res.send('Backend Running Successfully');

});



/*
========================================
SERVER
========================================
*/

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

  console.log(`Server Running on Port ${PORT}`);

});