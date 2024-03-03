

//import appointmentSchema

const appointments=require('../models/appointmentSchema')


//

exports.getAllAppointment= async (req,res)=>{
    try{
        const allAppointment =await appointments.find()
        res.status(200).json(allAppointment)
    }
    catch(err){
        res.status(401).json(`Request Failed Due to ${err}`)
    }
}

exports.bookAppointment =async (req ,res )=>{
    console.log('inside appointment request');

    const userId =req.payload
    console.log(userId);


    const {fullname , phoneno , age , gender , department , doctor ,date , time }=req.body

    console.log(fullname , phoneno , age , gender , department , doctor ,date , time);

   try{
    const existingAppointment =await appointments.findOne({fullname})
    if(existingAppointment){
        res.status(406).json('Appointement Already Booked .')
    }
    else{
        const newAppointment =new appointments({
            fullname , phoneno , age , gender , department , doctor ,date , time
        })
        await newAppointment.save()
        res.status(200).json(newAppointment)
    }
   }
   catch{
    res.status(401).json(`request failed due to ${err}`)
   }


    // res.status(200).json('Book Appointment Request Recieved ')
}