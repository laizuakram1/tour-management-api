const { getToursService,
    createTourService,
    getTourService,
    updateTourService,
    getCheapestTourService,
    getTrendingTourService
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


//post single tour
exports.createTours = async (req, res, next) => {

    try {
        const result = await createTourService(req.body, {runValidators: true});

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


//update single tour by id
exports.updateTour = async(req, res, next)=>{
    try {
        const {id} = req.params;
        const result = await updateTourService(id, req.body, {
            runValidators: true});

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
// get cheapest tour
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

//get most trending tour
exports.getTrendingTour = async(req, res, next)=>{
    try {
        const trending = await getTrendingTourService()
        res.status(200).json({
            status:'success',
            message:'trending tour success', 
            data: trending
        })
        
    } catch (error) {
        res.status(400).json({
            status:'fail',
            message:'trending tour failed',
        })
        
    }
}

