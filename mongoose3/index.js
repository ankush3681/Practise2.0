const express = require("express");
const {connection} = require("./db");
const {UserRouter} = require("./routes/User.route")
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/user",UserRouter);



app.listen(process.env.PORT, async ()=>{
    try {
        await connection 
        console.log("server is connected to DB");
        console.log("server is running on port 3000");
    } catch (err) {
        console.log("cannot connect to DB");
        console.log(err);
    }
})

