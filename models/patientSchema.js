const mongoose =require('mongoose')

const patientSchema = new mongoose.Schema({
    patientId:{
        type:String,
        require:true
    },
    patientName:{
    type:String,
        require:true
 },
 roomNo:{
    type:String,
        require:true
 }
})

const  patients=mongoose.model("patients",patientSchema)

module.exports = patients