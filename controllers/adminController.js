const admins =require('../models/adminSchema')

const jwt = require('jsonwebtoken')


//logic for admin login

exports.adlogin =async (req,res)=>{
    console.log('inside login function');

    const {administator_name,password} =req.body


  try{  const existingAdmin =await admins.findOne({administator_name,password})

    if(existingAdmin){
        const token =  jwt.sign({adminId : existingAdmin._id},"hmssecretkey1234")
      
        res.status(200).json({
            existingAdmin,
            token
        })
    }
    else{
        res.status(404).json('Invalid Administator or Password')
    }
}catch(err){
    res.status(401).json(`Login Request failed due to :`,err)
}
   
  
}
