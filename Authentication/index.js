const express =require("express");
require("dotenv").config();
const app = express();

app.use(express.json());


app.listen(process.env.PORT,()=>{
    console.log("Server is running on port 5000");
})