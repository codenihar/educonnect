const express = require("express");
const bodyParser =require ("body-parser");
const app= express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("/home/yuktha/Hacktriofinal/hacktrio/src"));

app.get("/",function(req,res){
    res.sendFile("/home/yuktha/Hacktriofinal/hacktrio/src/index.js");
});

app.listen(5000,function(){
    console.log("server is running");
   
    // /home/yuktha/Hacktriofinal/hacktrio/public/index.html
  });
