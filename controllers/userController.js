

const users =require('../models/userSchema')

const jwt = require('jsonwebtoken')

//logic for register

exports.register =async (req,res)=>{
    console.log('inside userController register logic');

    const{username,phoneno,password}=req.body

  try{ 
     const existingUser =await users.findOne({phoneno})
    if(existingUser){
        res.status(406).json('Already Existing ... Please Login')
        
    }
    else{

        const newUser= new  users({
            username,
            phoneno,
            password
        })

       await newUser.save()

    //response
    res.status(200).json(newUser)
    }
}
catch(err){
    res.status(401).json('Register Request Failed due to ',err)
}
}

//logic for login

exports.login =async (req,res)=>{
    console.log('inside login function');
    console.log(req.body);

    const {phoneno,password} =req.body

  try{  const existingUser =await users.findOne({phoneno,password})

    if(existingUser){
      const token =  jwt.sign({userId : existingUser._id},"hmssecretkey1234")
        res.status(200).json({
            existingUser,
            token
        })
    }
    else{
        res.status(404).json('Invalid Phone Number or Password')
    }
}catch(err){
    res.status(401).json(`Login Request failed due to :`,err)
}
   
  
}

