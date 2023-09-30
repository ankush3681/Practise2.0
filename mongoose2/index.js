const express = require("express");
const { connection, UserModel } = require("./db");

const app = express();

app.use(express.json());
// create

app.post("/adduser", async (req, res) => {
  try {
    const data = new UserModel(req.body);
    await data.save();
    res.status(200).send("data is added");
  } catch (err) {
    res.send(err);
  }
});

// read

app.get("/", async (req, res) => {
  const query = req.query;
  const {sort} = req.query;
  let user;
  let obj = {};
  if(query.city){
    obj.city=query.city;
  }
  if(query.is_married){
    obj.is_married=query.is_married;
  }
  try {
    if(sort=="dsc"){
      user =  await UserModel.find().sort({"age":-1});
    }else if(sort=="asc"){
       user = await  UserModel.find().sort({ "age" : 1 });
    }else{
      user = await UserModel.find(obj);
    }

    res.status(200).send(user);
  } catch (err) {
    res.send(err);
  }
});

// update

app.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await UserModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send("data updated");
  } catch (err) {
    res.send(err);
  }
});

// Delete

app.delete("/deleteuser/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await UserModel.findByIdAndDelete({ _id: id });
    res.status(200).send("User Deleted Successfully");
  } catch (err) {
    res.send(err);
  }
});

app.listen(3200, async () => {
  try {
    await connection;
    console.log("server is connected to DB");
  } catch (err) {
    console.log(err);
    console.log("cannot connect to DB");
  }
  console.log("server is running on port 3200");
});
