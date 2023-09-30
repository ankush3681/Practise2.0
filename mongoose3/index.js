const express = require("express");
const {connection,UserModel} = require("./db");

const app = express();

app.use(express.json());

// create

app.post("/adduser", async(req,res)=>{
try {
    const user = new UserModel(req.body);
    await user.save();
    res.status(200).send({"mssg":"new user added successfully"});
} catch (err) {
    res.status(200).send(err);
}
})

// read

app.get("/user", async(req,res)=>{
    try {
        const user = await UserModel.find();
        res.send(user)
    } catch (err) {
        res.send(err);
    }
})


// update

app.patch("/update/:id", async(req,res)=>{
    const {id} = req.params;
try {
    await UserModel.findByIdAndUpdate({_id:id},req.body);
    res.send("User data updated successdully")
} catch (err) {
    res.send(err)
}
})


// delete

app.delete("/delete/:id", async(req,res)=>{
    const {id} = req.params;
    try {
        await UserModel.findByIdAndDelete({_id:id});
        res.send('data deleted')
    } catch (err) {
        res.send(err);
    }
})
app.listen(3000, async ()=>{
    try {
        await connection 
        console.log("server is connected to DB");
        console.log("server is running on port 3000");
    } catch (err) {
        console.log("cannot connect to DB");
        console.log(err);
    }
})

