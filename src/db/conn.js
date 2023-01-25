const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://0.0.0.0:27017/registration",{
    useUnifiedTopology:true, 
}).then(() =>{
    console.log("Connected");
}).catch((e) =>{
    console.log(e);
})