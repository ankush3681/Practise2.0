const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://127.0.0.1:27017/mongoose2");

const UserSchema = mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    city:{type:String,required:true},
    language:{type:String,required:true}
},{
    versionKey:false
})

const UserModel = mongoose.model("user",UserSchema);


module.exports={
    connection,
    UserModel
}