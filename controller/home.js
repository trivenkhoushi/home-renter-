
 
const Home=require("../models/home")

exports.getaddhome=(req,res,next)=>{
  console.log(req.url,req.method);

res.render('host/addhome',{Pagetitle:'add home'});

}
/* const registeredhomes=[]; */
exports.postaddhome=(req,res,next)=>{
 
  /* registeredhomes.push(req.body); */
  const home=new Home(req.body.houseName,req.body.location,req.body.price,req.body.houseimage);
  home.save();

res.render('host/homeAdded',{Pagetitle:'home added'});


}

exports.gethome=(req,res,next)=>{
  Home.fetchAll(registeredhomes=>{
console.log(req.url,req.method);
 console.log(registeredhomes);
res.render('store/home',{registeredhomes:registeredhomes,Pagetitle:'airbnb home page'})}

  )};
  

  exports.book=(req,res,next)=>{
    
  }
 