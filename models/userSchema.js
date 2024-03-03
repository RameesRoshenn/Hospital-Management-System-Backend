//a
const mongoose = require('mongoose')

const validator =require('validator')

//d)create schema
 
    const userSchema = new mongoose.Schema({
        username:{
            type:String,
            require:true,
            min:[3,'Must be atleast 3 characters got only {value}',]
        },
        phoneno:{
            type:Number,
            require:true,
            unique:true,

            validator(value){
                if (!validator.isMobilePhone(value, 'any', { strictMode: false })) {
                    throw new Error('Invalid phone number');
                }
            }


        },
        password:{
            type:String,
            require:true
        }
    })

  



//b
const users =mongoose.model('users',userSchema)
//c
module.exports=users