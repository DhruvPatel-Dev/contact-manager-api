const jwt = require('jsonwebtoken')

const validateToken = (req,res,next)=>{

 let head = req.headers.authorization;
 let token = head.split(" ")[1];
if(token===" ")
{
  res.status(404);
  throw new Error("not valid token")
} 
  jwt.verify(token,process.env.TOKEN,(err,decode)=>{
    if(err)
    {
      res.status(404)
      throw new Error(err);
    }
    req.user = decode;
    
  });

  next();
}

module.exports={validateToken};