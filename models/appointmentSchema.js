const mongoose = require('mongoose')

const appointmentSchema =new mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
    phoneno:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    department:{
        type:String,
        require:true
    },
    doctor:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    time:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        require:true
    }
})


const appointments =mongoose.model("appointments",appointmentSchema)

module.exports = appointments
