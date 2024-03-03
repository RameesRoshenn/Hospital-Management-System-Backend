const patients =require('../models/patientSchema')




//get patient Card
exports.getPatientDetails =async (req,res)=>{
    try{
        const allPatient = await patients.find()
        res.status(200).json(allPatient)

    }
    catch(err){
        res.status(401).json(`Request Failed Due to ${err}`)

    }
}


exports.addPatient =async (req ,res)=>{
    console.log('inside Add Patient request');
    const adminId =req.payload
    console.log(adminId);

   

    const {patientId , patientName , roomNo  }=req.body
    console.log(patientId , patientName , roomNo );

    try{
        const existingPatient =await patients.findOne({patientId})
        if(existingPatient){
            res.status(406).json('Patient Already Exist .')
        }
        else{
            const newPatient=new patients({
                patientId , patientName , roomNo 
            })
            await newPatient.save()
            
    res.status(200).json(newPatient)
        }

    }
    catch{
        res.status(401).json(`request failed due to ${err}`)
    }



}

//delete patient

exports.deletepatient =async (req,res) =>{
    const {id} =req.params

    try{
        const removePatient =await patients.findByIdAndDelete({_id:id})
        res.status(200).json(removePatient)
    }
    catch{
        res.status(401).json(err)
    }
}