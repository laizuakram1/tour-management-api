const express = require('express');
const router = express.Router();

const tourController = require('../controllers/Tours.controller');


router.route('/')
.get(tourController.getTours)
.post(tourController.createTours)

module.exports = router;