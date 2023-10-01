const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/employess')

const uri = "mongodb+srv://Kawthar146:QqzN6HDdH82MNEli@cluster0.so9wbrl.mongodb.net/?retryWrites=true&w=majority";

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log("connect to DB"))
.catch((err)=>console.log(err))


  app.get('/employee', async (req, res) => {
    const employees = await EmployeeModel.find();
    res.json(employees);
  });

  app.post('/employee/create', async (req, res) => {
    const newEmployee = new EmployeeModel(req.body);
    await newEmployee.save();
    res.json(newEmployee);
  });

  app.put('/employee/update/:id', async (req, res) => {
    // const updatedEmployee = await EmployeeModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    // res.json(updatedEmployee);
    const { id } = req.params;

    try {
      const deletedEmployee = await Employee.findByIdAndDelete(id);
  
      if (!deletedEmployee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
  
      res.json({ message: 'Employee deleted successfully' });
    } catch (error) {
      console.error('Error deleting employee:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  

  

  app.delete('/employee/delete/:id', async (req, res) => {
    await EmployeeModel.findByIdAndDelete(req.params.id);
    res.json({ message: 'Employee deleted successfully' });
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
