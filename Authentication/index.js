const express =require("express");
const { UserRouter } = require("./route/user.route");
const { connection } = require("./db");
const jwt = require('jsonwebtoken');

require("dotenv").config();
const app = express();

app.use(express.json());
app.use("/user",UserRouter);

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.get("/about",(req,res)=>{
    res.send("About Page")
})

app.get("/contacts",(req,res)=>{
    res.send("Contacts Page")
})

// Protected

app.get("/movie",(req,res)=>{
    const {token} = req.query;
    jwt.verify(token, 'secret', (err, decoded) => {
        if(decoded){
            res.status(200).send("Movies Data")
        }else{
            res.status(400).send(err.message);
        }
        
      });
   
})

app.get("/series",(req,res)=>{
    const {token}= req.query;
    jwt.verify(token, 'secret', (err, decoded) =>{
        if(err){
            res.status(400).send(err)
        }else{
            res.send("Series Data")
        }
      });
})

app.listen(process.env.PORT,async ()=>{
    try {
        await connection
        console.log("server is connected to DB");
        console.log("Server is running on port 5000");
    } catch (err) {
        console.log("cannot connect to DB");
        console.log(err)
    }
})