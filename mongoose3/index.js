const express = require("express");
const {connection,UserModel} = require("./db");

const app = express();

app.use(express.json());


app.get("/user",(req,res)=>{
    res.send("hello there")
})

app.listen(3000, async ()=>{
    try {
        await connection 
        console.log("server is connected to DB");
        console.log("server is running on port 3000");
    } catch (err) {
        console.log("cannot connect to DB");
        console.log(err);
    }
})

