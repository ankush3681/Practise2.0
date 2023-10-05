const express = require("express");
const { UserModel } = require("../model/user.model");
const jwt = require("jsonwebtoken");

const UserRouter = express.Router();

// register

UserRouter.post("/register", async(req,res)=>{
try {
    const user = new UserModel(req.body);
    await user.save();
    res.status(200).send({"msg":"user registered successfully."})
} catch (err) {
    res.status(400).send({"msg":err.message});
}
})


// login

UserRouter.post("/login", async(req,res)=>{
    const {email,password } = req.body;
    try {
        const user = await UserModel.findOne({email,password});
        // console.log(user)
        if(user){
            let token = jwt.sign({ post: 'full_stack' }, 'ankush');
           res.status(200).send({"msg":"Login Successfull.",token})
        }else{
            res.status(200).send({"msg":"Wrong Credentials!!!"});
        }
    } catch (err) {
        res.status(400).send({"msg":err.message});
    }
})


module.exports={
    UserRouter
}