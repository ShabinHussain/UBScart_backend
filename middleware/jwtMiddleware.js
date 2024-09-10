//middleware is used to verify jsonwebtoken
const jwt = require('jsonwebtoken')


const jwtmiddleware =(req,res,next) =>{

   //logic
    console.log('Inside jwt middleware');
    //access token
    console.log(req.headers);
    
    const token = req.headers["authorization"].split(' ')[1] 

    //verify
    try{
        const jwtResponse = jwt.verify(token,'supersecretkey')
        console.log(jwtResponse);
        req.payload= jwtResponse.userId 
        next()  
        
    }catch(error){
        res.status(401).json('Authorization failed ...please login',error)
    }

   

}

module.exports = jwtmiddleware