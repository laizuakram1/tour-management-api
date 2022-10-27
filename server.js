const mongoose = require('mongoose');
require("dotenv").config();


const app = require("./app");
const port = 5000;



//database connection 
mongoose.connect(`mongodb://localhost:27017/tour-management-api`).then(()=>{
    console.log('database connect successfully');
});




app.listen(port, () => {
    console.log(`my node server is run on port ${port}`);
  });

