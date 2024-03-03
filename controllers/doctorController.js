

const doctors=require('../models/doctorSchema')



//get doctorCard
exports.getDoctorDetails =async (req,res)=>{
    try{
        const allDoctor = await doctors.find()
        res.status(200).json(allDoctor)

    }
    catch(err){
        res.status(401).json(`Request Failed Due to ${err}`)

    }
}



exports.addDoctor =async (req ,res )=>{
    console.log('inside Add Doctor request');

    const adminId =req.payload
    console.log(adminId);

    const doctorImage=req.file.filename
    // console.log(doctorImage);

    const {doctorname , department}=req.body
    console.log(doctorname , department ,doctorImage);

    try{
        const existingDoctor =await doctors.findOne({doctorname})
        if(existingDoctor){
            res.status(406).json('Doctor Already Exist .')
        }
        else{
            const newDoctor=new doctors({
                doctorname,department,doctorImage
            })
            await newDoctor.save()
            
    res.status(200).json(newDoctor)
        }

    }
    catch{
        res.status(401).json(`request failed due to ${err}`)
    }



}

//editDoctor

exports.editDoctorDetails =async(req,res)=>{
    const {id} =req.params
    const  adminId =req.payload
    const {doctorname,department,doctorImage} =req.body
    const uploadDoctorImage = req.file?req.file.filename:doctorImage

    try{
        const updateDoctor =await doctors.findByIdAndUpdate({_id:id},{doctorname,department,doctorImage:uploadDoctorImage,adminId},{new:true})

        await updateDoctor.save()
            res.status(200).json(updateDoctor)
        
    }
    catch{
        res.status(401).json(err)
    }

}


//delete doctor

exports.deleteDoctor =async (req,res) =>{
    const {id} =req.params

    try{
        const removeDoctor =await doctors.findByIdAndDelete({_id:id})
        res.status(200).json(removeDoctor)
    }
    catch{
        res.status(401).json(err)
    }
}

