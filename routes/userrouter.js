const express=require("express");
const path=require('path');
const userRouter=express.Router();
const {registeredhomes}=require('./hostrouter');

const controllerhome=require("../controller/home")
userRouter.get("/",controllerhome.gethome);


userRouter.get("/booknow",controllerhome.book);

module.exports=userRouter;
