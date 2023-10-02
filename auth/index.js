const express = require("express");
const { connection } = require("./db");
const { UserRouter } = require("./route/User.route");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/user",UserRouter);

app.get("/",(req,res)=>{
    res.send("Home Page")
})

// protected route

app.get("/cart",(req,res)=>{
    const {token} = req.query;
    var decoded = jwt.verify(token, 'secret_message');
    if(decoded){
        res.status(200).send("Welcome to cart");
    }else{
        res.status(400).send({"msg":"Jwt required"});
    }
    // jwt.verify(token, 'secret_message', function(err, decoded) {
    //     console.log(decoded)
    //     if(decoded){
    //         res.status(200).send("Welcome to cart");
    //     }else{
    //         res.status(400).send({"msg":err.message});
    //     }      });
})


app.listen(process.env.Port,async()=>{
    try {
        await connection
        console.log("server is connected to DB");
        console.log("server is running on port 5050");
    } catch (err) {
        console.log("cannot connect to DB");
        console.log(err);
    }
})