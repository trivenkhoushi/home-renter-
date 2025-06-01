const express=require("express");

const path=require('path');
const app=express();
app.set('view engine','ejs');
app.set('views','views');


const {hostRouter}=require("./routes/hostrouter");
const userRouter=require("./routes/userrouter");
//controller exports
const controller404=require('./controller/404');


app.use(express.urlencoded());



  app.use(userRouter);
  app.use(hostRouter);
  
app.use(express.static(path.join(__dirname,'public')));


/*    app.use((req,res)=>{
res.status(404).render('404',{Pagetitle:'page not found'})
  })   */  //handling this also from controller/404
app.use(controller404.handler404);
  


const PORT=3000;
app.listen(PORT,()=>{
  console.log(`http://localhost:${PORT}`);
})
