const Tours = require("../models/Tours");


exports.getToursService = async() =>{
    const tourCollectin = await Tours.find({});

    return tourCollectin;
}

exports.createTourService = async(data) =>{
    const createTour = await Tours.create(data);

    return createTour;
}

exports.getTourService = async(id)=>{
    const tour = await Tours.findById({_id: id});
    

    return tour;
}

exports.updateTourService = async(id, data)=>{
    const result = await Tours.updateOne({_id: id}, {$set: data});

    return result;
}