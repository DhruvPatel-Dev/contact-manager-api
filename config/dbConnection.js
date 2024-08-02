const expressAsyncHandler = require("express-async-handler");
const { default: mongoose, connection} = require("mongoose");

     mongoose.connect(`${process.env.DB}/project_with_node`);
      
module.exports=connection