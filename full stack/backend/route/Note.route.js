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
    const { authorID } =req.body; 
    try {
        const note = await NoteModel.find({authorID:authorID});
        res.status(200).send(note);
    } catch (err) {
        res.status(400).send({"err":err.message});
    }
})


// update

NoteRouter.patch("/update/:Id", async(req,res)=>{
    const {Id} = req.params;
    const note = await NoteModel.findOne({_id:Id})
    try {
        if(note.authorID==req.body.authorID){
            await NoteModel.findByIdAndUpdate({_id:Id},req.body);
            res.status(200).send({"msg":"Note Updated Successfully"});
        }else{
           res.status(200).send({"msg":"You are not authorized to update this note."})
        }
       
    } catch (err) {
        res.status(400).send({"err":err.message});
    }
})


// delete

NoteRouter.delete("/delete/:id", async(req,res)=>{
    const {id} = req.params;
    const note =await NoteModel.findOne({_id:id});
    try {
        if(req.body.authorID==note.authorID){
            await NoteModel.findByIdAndDelete({_id:id});
            res.status(200).send({"msg":"Note Deleted Successfully"});
        }else{
            res.status(200).send({"msg":"You are not authorised to delete this note."});

        }
        
    } catch (err) {
        res.status(400).send({"err":err.message});
    }
})


module.exports={
    NoteRouter
}