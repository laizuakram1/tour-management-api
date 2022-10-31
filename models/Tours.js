const mongoose = require('mongoose');


//tour schema
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

module.exports= Tours;