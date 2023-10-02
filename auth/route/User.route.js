const express = require("express");
const { UserModel } = require("../model/user.model");

const UserRouter = express.Router();


UserRouter.post("/register",async(req,res)=>{
   try {
    const user = new UserModel(req.body);
    await user.save();
    res.status(200).json({"msg":"New user Registered successfully"});
   } catch (err) {
    res.send(err);
   }
})

UserRouter.post("/login", async(req,res)=>{
    try {
        
    } catch (err) {
        
    }
})

module.exports={
    UserRouter
}