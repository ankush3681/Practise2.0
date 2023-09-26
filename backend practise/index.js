const express = require("express");
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send("Hello there")
})



app.listen(5000,()=>{
    console.log("server is running...")
})