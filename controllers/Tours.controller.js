const { getTourService, createTourService } = require("../services/Tour.services")



//get all tours
exports.getTours = async(req, res, next)=>{
    try {
      const result = await getTourService();
    
      res.status(200).json({
        status:'success',
        message:'data get successful',
        data: result
      })
      
    } catch (error) {
      res.status(400).json({
        status:'failed',
        message: "data can't get",
        error: error.message 
        
      })
    }
    }


    //post tours
    exports.createTours = async (req, res, next) =>{

        try {
         const result = await createTourService(req.body);
          
          res.status(200).json({
            status:"success",
            message:"tours post successful",
            data: result
          })
         
        } catch (error) {
         res.status(400).json({
           status:'failed',
           message:'tours post failed',
           error: error.message
         })
        }
       }