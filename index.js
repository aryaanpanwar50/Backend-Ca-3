const express = require('express')
const connectDB = require('./db')
const app = express()
const route = require('./routes')


app.use(express.json())

app.use('/api',route)

app.listen(3000,async()=>{
    try{
        await connectDB()
        console.log("Server is running on port 3000")
    }catch(error){
        console.error(error.message)
    }
})