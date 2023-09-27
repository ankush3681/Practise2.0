const mongoose = require("mongoose");

const main = async () =>{
try {
    const connection = await mongoose.connect("mongodb://127.0.0.1:27017/practise_user");
    console.log("connected to db");
    // await UserModel.insertMany([{name:"ankus",age:23,married:false},{name:"Rahul",age:25,married:true}]);
    console.log("inserted data")
    const user = new UserModel({
        name:"Vikas",
        age:25,
        married:false
    })
    await user.save();
} catch (err) {
    console.log("cannot connect to db");
    console.log(err);
}
    
}

const UserSchema = mongoose.Schema({
    name:String,
    age:Number,
    married:Boolean
},
{
    versionKey:false
})

const UserModel = mongoose.model("user",UserSchema);




main();