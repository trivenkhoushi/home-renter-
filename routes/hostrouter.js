const express=require("express");
const hostRouter=express.Router();




const controllerhome=require("../controller/home")
hostRouter.get("/add-home",controllerhome.getaddhome);




hostRouter.post("/add-home",controllerhome.postaddhome)



exports.hostRouter=hostRouter;

