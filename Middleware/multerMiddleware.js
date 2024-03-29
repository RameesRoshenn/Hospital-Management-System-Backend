

const multer = require('multer')


//storage
const storage =multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },
    //filename
    filename:(req,file,callback)=>{
     const filename=   `image-${Date.now()}-${file.originalname}`
     callback(null,filename)
    }
})

//filefilter
const fileFilter=(req,file,callback)=>{
    if(file.mimetype==='image/png' || file.mimetype==='image/jpeg' || file.mimetype==='image/jpg' ){
        callback(null,true)
    }
    else{
        callback(null,false)
        return callback(new Error("only png , jpeg ,jpg files will be allowed !!"))
    }
}



const multerConfig =multer({
    storage,
    fileFilter
})

module.exports =multerConfig