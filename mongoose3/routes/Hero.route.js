const express = require("express");
const { HeroModel } = require("../model/Hero.model");

const HeroRouter = express.Router();

// create

HeroRouter.post("/add",async(req,res)=>{
    try {
        const hero = new HeroModel(req.body);
        await hero.save();
        res.send("Hero Data Added successfully");
    } catch (err) {
        res.send(err);
    }
})

// read

HeroRouter.get("/", async(req,res)=>{
    try {
       const hero = await HeroModel.find();
       res.send(hero)
    } catch (err) {
        console.log(err);
    }
})


module.exports={
    HeroRouter
}