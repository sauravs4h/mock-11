const mongoose=require("mongoose");

const postSchema=mongoose.Schema({
    name:String,
    email:String,
    destination:String,
    travellers_count:Number,
    budget_per_person:Number
})

const Postmodel=mongoose.model("post",postSchema);

module.exports={Postmodel}