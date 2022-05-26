const express = require("express")

const app = express()

const fs = require("fs")

fs.readFile('./data.json','utf-8',(err,data)=>{
    if(!err){
        app.get("/",(req,res)=>{
            res.send(data) 
            console.log(data)
        })
    }else{
        console.log('error bas verdi')
    }
})

app.listen(5000,()=>{
    console.log("server is runing")
})