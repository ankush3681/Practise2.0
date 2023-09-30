const mongoose = require("mongoose");

const HeroSchema = mongoose.Schema({
    username:{type:String,required:true},
    city:{type:String,required:true},
},{
    versionKey:false
});

const HeroModel = mongoose.model("hero",HeroSchema);

module.exports={
    HeroModel
}