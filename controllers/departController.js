
const departments =require('../models/departmentSchema')



//get department Card
exports.getDeapartmentDetails =async (req,res)=>{
    try{
        const allDepartment = await departments.find()
        res.status(200).json(allDepartment)

    }
    catch(err){
        res.status(401).json(`Request Failed Due to ${err}`)

    }
}



exports.addDepartment =async (req ,res)=>{
    console.log('inside Add Department request');
    const adminId =req.payload
    console.log(adminId);

   

    const {departmentName , logo , details}=req.body
    console.log(departmentName , logo , details);

    try{
        const existingDepartment =await departments.findOne({departmentName})
        if(existingDepartment){
            res.status(406).json('Department Already Exist .')
        }
        else{
            const newDepartment=new departments({
                departmentName , logo , details
            })
            await newDepartment.save()
            
    res.status(200).json(newDepartment)
        }

    }
    catch{
        res.status(401).json(`request failed due to ${err}`)
    }



}