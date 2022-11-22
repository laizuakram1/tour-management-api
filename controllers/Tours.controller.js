const { getToursService,
    createTourService,
    getTourService,
    updateTourService,
    getCheapestTourService
} = require("../services/Tour.services")

const Tours = require("../models/Tours");

//get all tours
exports.getTours = async (req, res, next) => {
    try {
        // console.log(req.query.limit);
        const result = await getToursService(req.query);

        res.status(200).json({
            status: 'success',
            message: 'data get successful',
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: "data can't get",
            error: error.message

        })
    }
}


//post tours
exports.createTours = async (req, res, next) => {

    try {
        const result = await createTourService(req.body);

        res.status(200).json({
            status: "success",
            message: "tours post successful",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'tours post failed',
            error: error.message
        })
    }
}


//get single tour by id
exports.getTour = async (req, res, next) => {
    try {
        const {id} = req.params;
        const tourById = await getTourService(id);
       

        res.status(200).json({
            status: 'success',
            message: 'tour get successful',
            data: tourById
        })


    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'tour found not done',
            error: error.message
        })
    }
}



exports.updateTour = async(req, res, next)=>{
    try {
        const {id} = req.params;
        const result = await updateTourService(id, req.body);

        res.status(200).json({
            status:'success',
            message: 'tour update successful',
            data: result 
        })
    } catch (error) {
        res.status(400).json({
            status:'fail',
            message:'tour update failed',
            error: error.message
        })
        
    }
}

exports.getCheapestTour = async(req, res, next)=>{
    try {
       const result =  await getCheapestTourService();

       res.status(200).json({
        status: 'success',
        message: 'cheapest tour found',
        data: result
       })
        
    } catch (error) {
        res.status(400).json({
            status: 'fail', 
            message:'cheapest tour not get'
        })
    }
}

