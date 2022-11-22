const Tours = require("../models/Tours");


exports.getToursService = async(query) =>{
        const tourCollectin = await Tours.find({}).sort(query.sort).limit(query.limit);
    
    return tourCollectin;
}

exports.createTourService = async(data) =>{
    const createTour = await Tours.create(data);

    return createTour;
}

//get single tour service
exports.getTourService = async(id)=>{
    const tour = await Tours.findById({_id: id})
    await tour.views++
    tour.save();

    return tour;
}
exports.updateTourService = async(id, data)=>{
    const result = await Tours.updateOne({_id: id}, {$set: data}, {runValidators: true});

    return result;
}

exports.getCheapestTourService = async ()=>{
    const cheapestTour = await Tours.find({}).sort({price: 1}).limit(3)

    return cheapestTour;
}

exports.getTrendingTourService = async()=>{
    const trending = await Tours.find({}).sort({views: -1}).limit(3);

    return trending;
}

