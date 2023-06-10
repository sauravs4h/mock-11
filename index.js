const express=require("express");
const app=express();
var cors = require('cors');

const {connection}=require("./config/db");
const {postr}=require("./routes/post.routes");

app.use(cors())
app.use(express.json());
app.use("/post",postr);

app.get("/",(req,res)=>{
    res.send({msg:"base api"})
})



app.listen(8080,async()=>{

    try {
        await connection;
        console.log("connected with db");
        console.log("running on 8080");
        
    } catch (error) {
        console.log("error while running")
    }
})
