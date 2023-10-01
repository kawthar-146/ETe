const mongoose = require('mongoose')

    const employeeSchema = new mongoose.Schema({
        fullName: String,
        email: String,
        age: Number,
        dob: String,
        country: String},
        {timestamps:true
      });
      
      const Employee = mongoose.model('Employee', employeeSchema);

      module.exports = Employee