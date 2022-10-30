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
    
  },
  currency:{
    type: String,
    enum: {
      values:['UDS', 'BDT', 'RUPEE']
    }
  }

},{
  // mongoose optional validation type here

  timestamps:true,
})

const Tours = mongoose.model('Tours', tourSchema );


app.get('/', (req, res) => {
  res.send('yay! tour api is working')
})


app.post('/api/v1/tours', async (req, res, next) =>{

 try {
  const tours = new Tours(req.body);
  const result = await tours.save();
   
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
})

app.get('/api/v1/tours', async(req, res, next)=>{
try {
  const result = await Tours.find().select('name price');

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
})

module.exports= app;
