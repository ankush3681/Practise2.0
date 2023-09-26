const express = require("express");
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send("Hello there")
})

app.post("/addnew",(req,res)=>{
    res.send("data is added")
    console.log(req.body)
})

app.listen(5000)