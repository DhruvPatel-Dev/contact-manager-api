const { default: mongoose } = require("mongoose");



const userschema =mongoose.Schema({
    username:{
        type:String,
        required:[true,"username must"],
        unique:[true,"already exist"]
    },
    email:{
        type:String,
        required:[true,"email must"],
        unique:[true,"already"],
    },
    password:{
       type:String,
       required:[true,"enter password"]
    }
     },
    {
        timestamps:true,
    })

    module.exports = mongoose.model('userModel',userschema)