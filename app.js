const express = require('express')
const app = express()
const cors = require("cors");
const mongoose = require('mongoose');


//middleware
app.use(express.json());
app.use(cors());

//schema
const tourSchema = mongoose.Schema({
  name:{
    type: String,
    required: [true, "please write tour name"],
  },
  package: {
    type: String,
    required: [true, 'provide package name']
  },
  location: {
    type: String,
    required:[true, 'write tour location']
  },
  features: {
    type: String,
    require:[true, 'add some features']
  },
  price: {
    type: Number,
    required:[true, 'add price'],
    min:[0, "price can't negative"],
    validate: {
      validator:(value) =>{
        const isInteger = Number.isInteger(value);
        if(isInteger){
          return true
        }else{
          return false
        }
      },
      message: "quantity must be an integer"
    },
    
  }

})


app.get('/', (req, res) => {
  res.send('yay! tour api is working')
})


module.exports= app;
