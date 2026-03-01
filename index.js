const express=require("express");
const cors=require("cors");
const fs=require("fs");

const app=express();
app.use(cors());

app.get("/find",(req,res)=>{
	let sp=req.query.speed;
	let ms=sp*5/18;
	let msg=ms.toFixed(2)+ " m/s ";
	let info="\nSpeed=" + sp+ "Date and Time " + new Date().toString()+ "\n" + msg;
	fs.appendFile("log.txt",info,(err)=>{
		if(err)
			console.log(err);
	});
	res.send({"msg":msg});
});

app.listen(3001,()=>{
	console.log("ready@3001");
});