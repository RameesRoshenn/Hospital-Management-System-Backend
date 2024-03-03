//a
const mongoose = require('mongoose')

//d)create schema
 
const adminSchema = new mongoose.Schema({
    administator_name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})



//b
const admins =mongoose.model('admins',adminSchema)
//c
module.exports=admins