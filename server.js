// 1 require express and fs 
const express= require ('express');

const fs = require ('fs');
const v = require('./verif');
//2 create instance
const app = express();
// 3 create port 
const PORT = 5098;
 app.get('/',v,(req,res)=>{
    fs.readFile('./home.html','utf8',(err,data)=>{
        err ? res.send('file not found') && console.error(err):res.send(data);
    })
 })

 app.get('./home.html',v,(req,res)=>{
    fs.readFile('./home.html','utf8',(err,data)=>{
        err ? res.send('file not found') && console.error(err):res.send(data);
    })
 })

 app.get('/our services.html',v,(req,res)=>{
    fs.readFile('./our services.html','utf8',(err,data)=>{
        err ? res.send('file not found') && console.error(err):res.send(data);
    })
 })

 app.get('/contact us.html',v,(req,res)=>{
    fs.readFile('./our services.html','utf8',(err,data)=>{
        err ? res.send('file not found') && console.error(err):res.send(data);
    })
 })
//4 create serever 
app.listen(PORT, (req,res)=>{
    console.log(`server running on port ${PORT} ..`)
})




