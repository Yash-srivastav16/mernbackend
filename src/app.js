const express= require("express");
const app = express();
const path= require("path");
const hbs= require("hbs");
require("./db/conn");
const Register = require("./models/register");
const port= process.env.PORT || 3000;

//Used for hosting the static websites
const staticPath= path.join(__dirname,"../public");
app.use(express.static(staticPath));

app.use(express.json());
app.use(express.urlencoded({
    extended:false
}));

//For HBS files
const viewsPath= path.join(__dirname, "../templates/views");
const partialsPath= path.join(__dirname, "../templates/partials");
app.set("view engine","hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.get("/", (req,res) =>{
    res.render("register");
})


app.post("/register", async(req,res) =>{
    try {
        const password = req.body.userPassword;
        const confirmPassword= req.body.userConfirmPassword;
        if(password===confirmPassword){
            const registerDetails= new Register({
                name:req.body.userName,
                email:req.body.email,
                password:password,
                confirmpassword:confirmPassword
            })
            const registered= await registerDetails.save();
            res.status(201).render("index")
        }
        else{
            res.send("Password Missmatch");
        }
    } catch (error) {
        res.send(error);
    }
})





app.listen(port, () =>{
    console.log("Running Succesfull");
})

