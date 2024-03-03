
//1)
require("dotenv").config()

// 2)

const express =require("express")

const morgan = require('morgan');

// 3)import

const cors= require("cors")

//import router
const router = require('./Routes/router')

//import mongoose
require('./DB/connections')

// //import middleware
// const appMiidleware= require('./Middleware/appMiiddleware')

//4)

const hmsServer = express()

//5)
hmsServer.use(cors())

//6) use
hmsServer.use(express.json())


//server use middleware
// hmsServer.use(appMiidleware)


//use router
hmsServer.use(router)

//for image from google

hmsServer.use(morgan('combined'));

//for image
hmsServer.use('/uploads',express.static('./uploads'))

//7)
const PORT = 4000 || process.env.PORT

//8)
hmsServer.listen(PORT,()=>{
    console.log(`SERVER RUNNING SUCCESSFULLY AT PORT NUMBER ${PORT}`);
})

//9)
hmsServer.get('/',(req,res)=>{
    res.send(`<h1 style="color:red">Hospital Management System running successfully and waiting for client request</h1>`)
})

