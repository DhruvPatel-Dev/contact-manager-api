const expressAsyncHandler = require("express-async-handler");
const userModel = require("../models/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const registerUser = expressAsyncHandler( async (req,res)=>{
    const {username,email,password} = req.body;
    if(!username||!email||!password)
    {
        res.status(400)
        throw new Error("all field required")
    }
    const userAvailble = await userModel.findOne({email});
    if(userAvailble)
    {
        res.status(400);
        throw new Error("user already exist")
    }
   await bcrypt.hash(password,12,async (err,hash)=>{
        if(err)
        {     res.status(500);
             throw new Error("server error try again")
        }
        
    const user = await userModel.create({
        username,email,password:hash,
    })
      if(user)
        {
            res.status(201).json({email:user.email,_id:user.id});
        }
        else
        {    res.status(500)
            throw new Error("some error")
        }   
    })
     
})
const loginUser = expressAsyncHandler(async (req,res)=>{
    const {email,password} = req.body;
    if(!email||!password)
    {
        res.status(400)
        throw new Error("all field mandatory");
    }
    const user  = await userModel.findOne({email});
    if(!user)
    {
        res.status(404)
        throw new Error("not found")
    }
   const result = await bcrypt.compare(password,user.password);
   if(result==true)
   {
     const ac = jwt.sign({email,username:user.username,id:user.id},process.env.TOKEN);
     res.status(200).json(ac);

   }
   else{
    res.status(404)
    throw new Error("wrongpass")
   }
    
        
    
       
    
})
const currentUser= expressAsyncHandler(async(req,res)=>{
    res.json({mess:"current",username:req.user.username})
}) 

module.exports = {currentUser,loginUser,registerUser};