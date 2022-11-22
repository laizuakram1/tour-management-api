const express = require('express');
const router = express.Router();

const tourController = require('../controllers/Tours.controller');


router.route('/')
.get(tourController.getTours)
.post(tourController.createTours)

router.route('/cheapest')
.get(tourController.getCheapestTour)

router.route('/:id')
.get(tourController.getTour)
.patch(tourController.updateTour);





module.exports = router;