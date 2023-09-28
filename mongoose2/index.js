const express = require("express");
const {connection,UserModel} = require("./db")

const app = express(); 

app.use(express.json());
// create

app.post("/adduser",async (req,res)=>{
 const data = await UserModel(req.body);
 await data.save();
 res.status(200).send("data is added")
})

// read

app.get("/",async(req,res)=>{
    const user = await UserModel.find();
    res.status(200).send(user)
})


// update

// app.update("/")

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