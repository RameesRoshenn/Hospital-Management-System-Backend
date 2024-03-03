
//1)import
const express =require('express')

//import controller
 const userController =require('../controllers/userController')
 const adminController=require('../controllers/adminController')

 //import appointment
 
 const appointmentController =require('../controllers/appointmentController')

 const doctorController =require('../controllers/doctorController')

 const departmentController =require('../controllers/departController')

 const patientController =require('../controllers/patientController')


 //import jwt middleware
 const jwtMiddleware =require('../Middleware/jwtMiddleware')

 //import multer
  const  multerConfiq=require('../Middleware/multerMiddleware')

//2)
const router = new express.Router

//3)logic
//   a)register
router.post('/user/register',userController.register)

// b)login
router.post('/user/login',userController.login)

//c)admin login

router.post('/admin/login',adminController.adlogin)

//d)add appointment


router.post('/appointment/add',jwtMiddleware,multerConfiq.single(),appointmentController.bookAppointment)

// get appointment  details

router.get('/appointments/all-appointment',appointmentController.getAllAppointment)


//e)doctor

router.post('/doctor/add', jwtMiddleware, multerConfiq.single('doctorImage'), doctorController.addDoctor);


//get doctor card

router.get('/doctors/all-doctors',doctorController.getDoctorDetails)

//edit doctor
router.put('/doctors/edit/:id',jwtMiddleware,multerConfiq.single('doctorImage'),doctorController.editDoctorDetails)

//delete doctor

router.delete('/doctor/remove/:id',jwtMiddleware,doctorController.deleteDoctor)


//f)department

router.post('/departments/add',jwtMiddleware, multerConfiq.single(''), departmentController.addDepartment)

//get department details

router.get('/departments/all-department',departmentController.getDeapartmentDetails)

//g)patient
router.post('/patients/add',jwtMiddleware, multerConfiq.single(''), patientController.addPatient)

//get patient details

router.get('/patients/all-patient',patientController.getPatientDetails)

//delete patient

router.delete('/patients/remove/:id',jwtMiddleware,patientController.deletepatient)


//4)
module.exports=router
