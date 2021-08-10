const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
//setup of api port 8000
const port = process.env.PORT || 5000;

//parse request of  type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse request data content type application/json
app.use(bodyParser.json());

//root route testing of port 
app.get('/', (req, res) => {
    res.send('REST API Port for Employee Managment');
});

//import api routes
const employeeRoutes=require('./src/routes/employee.route')
 
//employee route format
app.use('/api/v1/employee', employeeRoutes);

 //listen to the port
app.listen(port, () => {
    console.log(`Server started running at port ${port}`);
});

 
