const mongoose =require('mongoose')

const departmentSchema = new mongoose.Schema({
    departmentName:{
        type:String,
        require:true
    },
 logo:{
    type:String,
        require:true
 },
 details:{
    type:String,
        require:true
 }
})

const departments=mongoose.model("departments",departmentSchema)

module.exports = departments