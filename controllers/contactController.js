const expressAsyncHandler = require("express-async-handler");
const contactModel = require("../models/contactModel");



const getContact = expressAsyncHandler (
    async (req,res)=>{
       const contact = await contactModel.findOne({_id:req.params.id})
      if(!contact) 
        {   
             res.status(404);
             throw new Error("contact Not found");
          
        }      
        res.status(200).json(contact);
        
       
    }
    
)
const getContacts = expressAsyncHandler(async(req,res)=>{
   
    const contacts = await contactModel.find({userid:req.user.id});
   
     res.status(200).json(contacts);
}
)
const createContact = expressAsyncHandler(async (req,res)=>{
    
    const {name,email,phone} =req.body;
    if(!name||!email||!phone)
    {
        res.status(401); 
        throw new Error("allall");
    }

  const contact =  await contactModel.create({
        name,email,phone,userid:req.user.id,
    });
    res.status(201).json({mesage:"created success"})}
)
const putContact = expressAsyncHandler( async (req,res)=>{

  const contact =  await contactModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(contact);
}
)
const deleteContact = expressAsyncHandler ( async  (req,res)=>{
   const contact = await contactModel.findByIdAndDelete(req.params.id);
    res.status(200).json(contact);
}
)

module.exports = {getContact,createContact,putContact,deleteContact,getContacts};