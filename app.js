const express = require('express')
const app = express()
const cors = require("cors");
const tourRoute = require('./Routes/tour.router');


//middleware
app.use(express.json());
app.use(cors());



app.get('/', (req, res) => {
  res.send('yay! tour api is working')
})


app.use('/api/v1/tours', tourRoute)



module.exports= app;
