const express = require("express");
const { UserModel } = require("../model/User.model");
const jwt = require('jsonwebtoken');

const UserRouter = express.Router();

UserRouter.post("/register",async (req,res)=>{
    try {
        const user = new UserModel(req.body);
        await user.save();
        res.status(200).send({"msg":"New user is registered successfully"});
    } catch (err) {
        res.status(400).send({"msg":err.message});
    }
})

UserRouter.post("/login",async(req,res)=>{
    const {email,pass} = req.body;
    try {
        const user = await UserModel.findOne({email,pass});
        if(user){
            const token = jwt.sign({ school: 'masai' }, 'secret');
            res.status(200).send({"msg":"Login Successfull","token":token});
        }else{
            res.status(200).send({"msg":"Wrong credentials!!!"});
        }
    } catch (err) {
        res.status(400).send(err.message)
    }
})

module.exports={
    UserRouter
}