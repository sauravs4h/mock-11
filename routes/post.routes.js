const express=require("express");
const postr=express.Router();

const {Postmodel}=require("../models/post.model")

postr.get("/",(req,res)=>{
    res.send({msg:"post route"})
})


postr.post("/adddetails",async(req,res)=>{

    let payload=req.body;
    try {
        let post=new Postmodel(payload);
        await post.save();
        res.send({msg:"info added successfully",status:"success"});
        
    } catch (error) {
        res.send({msg:"error while adding info",status:"error"});
        
    }
});

postr.get("/getallpost",async(req,res)=>{

    try {

        let posts=await Postmodel.find();
        res.send({posts:posts,status:"success"});
        
        
    } catch (error) {
        res.send({msg:"error while getting info",status:"error"});
        
    }
})

postr.delete("/deletepost/:postid",async(req,res)=>{

    postid=req.params.postid
    try {

       await Postmodel.findByIdAndDelete({_id:postid});
       res.send({msg:"info deleted successfully",status:"success"});
        
        
    } catch (error) {
        res.send({msg:"error while deleting info",status:"error"});
        
    }
})


//filter 

postr.get("/filterpost/:des",async(req,res)=>{

    destination=req.params.des
    try {

       let posts=await Postmodel.find({destination:destination});
       res.send({posts:posts,status:"success"});
        
        
    } catch (error) {
        res.send({msg:"error while getting filter  info",status:"error"});
        
    }
})

//sort 
postr.get("/sortpost",async(req,res)=>{

    
    try {

       let posts=await Postmodel.find();

       posts.sort((a,b)=>{
        return a.budget_per_person-b.budget_per_person;
       })
       res.send({posts:posts,status:"success"});
        
        
    } catch (error) {
        res.send({msg:"error while getting sort info",status:"error"});
        
    }
})





module.exports={postr}