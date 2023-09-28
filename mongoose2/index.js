const express = require("express");
const {connection} = require("./db")

const app = express();

app.get("/",(req,res)=>{
    res.status(200).send("Hello this is home page")
})

app.listen(3200, async()=>{
    try {
        await connection;
        console.log("server is connected to DB");
    } catch (err) {
        console.log(err);
        console.log("cannot connect to DB");
    }
    console.log("server is running on port 3200");
})