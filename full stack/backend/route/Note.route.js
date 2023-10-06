const express = require("express");
const { NoteModel } = require("../model/note.model");
const NoteRouter = express.Router();



// create

NoteRouter.post("/add",async(req,res)=>{
try {
    const note = new NoteModel(req.body);
    await note.save();
    res.status(200).send({"msg":"New note Added Successfully."})
} catch (err) {
    res.status(400).send({"err":err.message});
}
})

// read

NoteRouter.get("/", async(req,res)=>{
    try {
        const user = await NoteModel.find();
        res.status(200).send(user);
    } catch (err) {
        res.status(400).send({"err":err.message});
    }
})


// update

NoteRouter.patch("/update/:id", async(req,res)=>{
    const {id} = req.params;
    try {
        await NoteModel.findByIdAndUpdate({_id:id},req.body);
        res.status(200).send({"msg":"Note Updated Successfully"});
    } catch (err) {
        res.status(400).send({"err":err.message});
    }
})


// delete

NoteRouter.delete("/delete/:id", async(req,res)=>{
    const {id} = req.params;
    try {
        await NoteModel.findByIdAndDelete({_id:id});
        res.status(200).send({"msg":"Note Deleted Successfully"});
    } catch (err) {
        res.status(400).send({"err":err.message});
    }
})


module.exports={
    NoteRouter
}