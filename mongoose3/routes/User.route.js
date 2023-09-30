const express = require("express");
const { UserModel } = require("../model/User.model");
const UserRouter = express.Router();

// create

UserRouter.post("/add", async(req,res)=>{
    try {
        const user = new UserModel(req.body);
        await user.save();
        res.status(200).send({"mssg":"new user added successfully"});
    } catch (err) {
        res.status(200).send(err);
    }
    })
    
    // read
    
    UserRouter.get("/", async(req,res)=>{
        try {
            const user = await UserModel.find();
            res.send(user)
        } catch (err) {
            res.send(err);
        }
    })
    
    
    // update
    
    UserRouter.patch("/update/:id", async(req,res)=>{
        const {id} = req.params;
    try {
        await UserModel.findByIdAndUpdate({_id:id},req.body);
        res.send("User data updated successdully")
    } catch (err) {
        res.send(err)
    }
    })
    
    
    // delete
    
    UserRouter.delete("/delete/:id", async(req,res)=>{
        const {id} = req.params;
        try {
            await UserModel.findByIdAndDelete({_id:id});
            res.send('data deleted')
        } catch (err) {
            res.send(err);
        }
    })

    module.exports={
        UserRouter
    }