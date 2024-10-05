const express = require("express");
const cors = require("cors");

let app = express();
app.use(cors());

app.get("/studentNames",(req,res)=>{
    let studentNames=["Kavitha","Kumari","Anitha","Sunitha","Chandhu","abc","brn","infotech","asdfghjkl"];
    let image =("https://th.bing.com/th?id=OIP.qLc7CKA1SnBvANPyTe5zeAHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2");
    res.json(studentNames);
    res.json(image);
});
app.get("/teachersNames",(req,res)=>{
 let teachersNames=["Sreeja","Shreeni"];
 res.json(teachersNames);
})

app.listen(4567,()=>{
    console.log("Loading port number 4567");
});