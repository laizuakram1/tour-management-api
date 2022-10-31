const Tours = require("../models/Tours");


exports.getTourService = async() =>{
    const tourCollectin = await Tours.find({});

    return tourCollectin;
}

exports.createTourService = async(data) =>{
    const createTour = await Tours.create(data);

    return createTour;
}