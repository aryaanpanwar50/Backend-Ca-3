const User = require('./model')

const createUser =async(req,res)=>{
    const{username,email,password,dob} = req.body
    try{
        if(!username){
            return res.status(400).send("User cannot be empty")
        }

        if(!email){
            return res.status(400).send("Email cannot be empty")
        }

        if(!password){
            return res.status(400).send("Email cannot be empty")
        }

        if(password.length<8 || password.length>16){
            return res.status(400).send("Password length should be greater than 8 or less than or equal to 16")
        }

        

        const newUser = new User({
            username,
            email,
            password,
            dob
        })

        await newUser.save()
        res.status(201).json({messgae:"User created ",newUser})

        

    }catch(error){
        res.status(500).json({error:error.message})
    }
}

module.exports = {createUser}