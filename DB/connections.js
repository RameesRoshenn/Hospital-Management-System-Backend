//import

const mongoose =require('mongoose')

//connection string

const connectionString = process.env.DATABASE

//connect to mongodb
mongoose.connect(connectionString).then(()=>{
    console.log('mongodb connected successfully');
}).catch((err)=>{
    console.log(`mongodb connection failed to :${err}`);
})