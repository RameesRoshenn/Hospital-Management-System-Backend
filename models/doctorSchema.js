
const mongoose = require ('mongoose')

const doctorSchema =new mongoose.Schema({
    doctorname:{
        type:String,
        require:true 
    },
    department:{
        type:String,
        require:true 

    },
    doctorImage:{
        type:String,
        require:true

    },
    doctorId:{
        type:String,
        require:true
    }
})




const doctors=mongoose.model("doctors",doctorSchema)

module.exports=doctors