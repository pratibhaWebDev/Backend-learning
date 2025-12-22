//step:1 - create a folder
//step:2 - move into that folder
//step:3 - npm init -y 
//step:4 - npm i express
//step:5 - create server.js

//Server Instantiate
const express = require('express')
const app =  express();

//used to parese req.body in express --> PUT or POST
const bodyParser = require('body-parser')

//specifically parse JSON data & add it to the request.Body object
app.use(bodyParser.json())


//activate the server on 3000 port
app.listen(3000,()=>{
  console.log("Server Started at port no. 3000")
})


//Routes
app.get('/',(req,res)=>{
  res.send("hello, your best developer ")
})

app.post('/api/cars',(req,res)=>{
  const {name,brand}=req.body;
  console.log(name)
  console.log(brand)
  res.send("Car Submitted")
})

const mongoose = require("mongoose")
// mongoose.connect('mongodb://localhost:27017/Cars',{
//   // useNewUrlParser:true,
//   // useUnifiedTopology:true
//   useNewUrlParser: true,
// useUnifiedTopology: true

// })
// .then(()=>{console.log("Connection Successful")})
// .catch((error) => {
//   console.error("MongoDB Connection Error:");
//   console.error(error);   // 👈 THIS IS IMPORTANT
// });

mongoose
  .connect("mongodb://127.0.0.1:27017/mydatabase")
  .then(() => console.log("MongoDB Connection Successful"))
  .catch((err) => console.error("MongoDB Connection Error:", err));