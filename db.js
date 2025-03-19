const mongoose = require('mongoose')
require('dotenv').config()

const connectDB =()=>{
    try{
        mongoose.connect(process.env.URL)
        console.log("MongoDb is connected")
    }catch(error){
        console.error(error.message);
    }
}

module.exports = connectDB