const mongoose = require('mongoose')

const dbConnect = async ()=>{
  try {
    await mongoose.connect("mongodb+srv://backend:e68SwvGSnPVrqRN5@cluster0.efudj.mongodb.net/zoey")
    console.log("connected to db")
  } catch (err) {
    console.err(err)
  }
}

module.exports=dbConnect