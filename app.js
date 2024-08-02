const express = require('express');
require('dotenv').config();
const dbConnection= require('./config/dbConnection');
const contactRouter = require('./routes/contactRouter');
const userRouter = require('./routes/userRouter');
const app = express();
const {errorHandler}=require('./middlewares/errorHandler')
  //must needed


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/api/contact',contactRouter);
app.use('/api/users',userRouter)
app.use(errorHandler);


app.listen(process.env.PORT||3000)