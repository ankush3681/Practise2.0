const express = require("express");
const { UserModel } = require("../model/user.model");
const jwt = require('jsonwebtoken');
const UserRouter = express.Router();


UserRouter.post("/register",async(req,res)=>{
   try {
    const user = new UserModel(req.body);
    await user.save();
    res.status(200).json("New user Registered successfully");
   } catch (err) {
    res.send(err);
   }
})

UserRouter.post("/login", async(req,res)=>{
    const {email,pass} = req.body;
    try {
        const user = await UserModel.findOne({email,pass});
        if(user){
            const token = jwt.sign({ payload:"kuch bhi" }, 'secret_message');

            res.status(200).send({"msg":"Login Successfull.",token});
        }else{
            res.status(200).send({"msg":"Wrong Credentials!!"});;
        }
    } catch (err) {
        res.status(400).send({"msg":err.message});
    }
})

module.exports={
    UserRouter
}