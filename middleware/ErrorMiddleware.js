const errorMiddleware = (errorFunction) => async(req, res, next) => {
    try {
     await errorFunction(req, res, next);
    } catch (error) {
       next(error)
    }
    
      
   

  
}
  
module.exports = errorMiddleware;