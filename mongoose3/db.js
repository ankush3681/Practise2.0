const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://127.0.0.1:27017/xyz");


const UserSchema = mongoose.Schema({
    username:{type:String,required:true},
    age:{type:Number,required:true},
    city:{type:String,required:true},
    married:{type:String,required:true}
},{
    versionKey:false
});

const UserModel = mongoose.model("user",UserSchema);

module.exports={
    connection,UserModel
}