const { default: mongoose } = require("mongoose");


const contactSchema = mongoose.Schema({
    userid:{
         type:mongoose.Schema.Types.ObjectId,
         required:true,
         ref:'userModel',
    },
    name:{
        type:String,
        required:[true,"please add name"]
    },
    email:{
        type:String,
        required:[true,"please add email"]
    },
    phone:{
        type:String,
        required:[true,"please add phone"]
    },
   

},
{
    timestamps:true,
});


module.exports=mongoose.model("contactModel",contactSchema);