const  mongoose = require('mongoose')

require("dotenv").config();

// const dbConnect=()=>{
//   mongoose.connect(process.env.DATABASE_URL,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//   })
//   .then(()=>console.log("DB ka connection is Successful"))
//   .catch((error)=>{
//     console.log(error,"issue in db conncetion");

    
//     process.exit(1);  
//   })
// }


const dbConnect = async ()=>{
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Database connect successfully");
  } catch (error) {
    console.error("Database connection fail");
    console.error(error)
    process.exit(1)
  }
}

module.exports=dbConnect;


