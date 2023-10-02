const express =require("express");
const { UserRouter } = require("./route/user.route");
const { connection } = require("./db");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use("/user",UserRouter);


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