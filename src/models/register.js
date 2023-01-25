const mongoose = require("mongoose");
const registerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type:String
    },
    confirmpassword:{
        type:String
    }
})

const Register = new mongoose.model("Register", registerSchema);

module.exports= Register;