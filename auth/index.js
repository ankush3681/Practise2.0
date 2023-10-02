const express = require("express");
const { connection } = require("./db");
const { UserRouter } = require("./route/User.route");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/user",UserRouter);

app.get("/",(req,res)=>{
    res.send("Home Page")
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