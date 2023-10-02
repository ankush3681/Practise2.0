const express = require("express");
const { UserModel } = require("../model/User.model");

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
    try {
        const user = UserModel.find();
        res.status(200).send(user);
    } catch (err) {
        res.status(400).send(err.message)
    }
})

module.exports={
    UserRouter
}