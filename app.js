var express=require('express');
var app=express();

app.post('/',function(req,res){
    res.send("Hello Post");
});

app.get('/',function(req,res){
    res.send("Hello");
});

app.listen(80,function(){
    console.log("app is listen on 80");
});