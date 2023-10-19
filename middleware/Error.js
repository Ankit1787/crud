const Errorhandler = require('../utils/Errorhandler')

module.exports=(err,req,res,next)=>{
      
    err.statusCode = err.statusCode || 500;
    
    err.message=err.message || "Internal Server Error";

       //handle invalid mongoDB id erro
    if(err.name==="CastError"){
        const message = `Resource not found. Invalid:${err.path}`;
        err = new Errorhandler(message,400);

    }
    //handle mongoose duplicate key erro
    if(err.code===11000){
      const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
      err = new Errorhandler(message,400);
     
    }

    res.status(err.statusCode).json({
        sucess:false,
        error: {
          message: err.message
        }
      });

}