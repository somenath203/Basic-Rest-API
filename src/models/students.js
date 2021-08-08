const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true, "Email-Id already present. Please choose another email-Id."], //email-id should always be unique for each user.
        validate(value){ //whenever user enters value in email section, then, we are getting that here.
            if(!validator.isEmail(value))//here, we are cheacking wether the entered email is valid or not.
            {
                throw new Error("Invalid Email.")
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        required:true,
    },
    address:{
        type:String,
        required:true
    }
})

//creating new collection
const Student = new mongoose.model('Student',studentSchema);



module.exports = Student;

