const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.get("/",(req,res)=>{
    res.status(200).send("Hello this is home page")
})

app.listen(3200, async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/mongoose2");
        console.log("server is connected to DB");
    } catch (err) {
        console.log(err);
        console.log("cannot connect to DB");
    }
    console.log("server is running on port 3200");
})