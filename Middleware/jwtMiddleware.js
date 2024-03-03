

const jwt = require('jsonwebtoken')

const jwtMiddleware =(req,res,next)=>{
    console.log('inside jwt middleware');

    //logic
    const token=req.headers['authorization'].split(' ')[1]
    console.log(token);
    try{
        const jwtResponse =jwt.verify(token,"hmssecretkey1234")
        console.log(jwtResponse);
        req.payload =jwtResponse.userId
        next()
    }
    catch (err){
        res.status(401).json("Authorization Failed Please Login")
    }

    
}

module.exports =jwtMiddleware