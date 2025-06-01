
const fs=require('fs');
const path=require('path');




//const registeredhomes=[];

module.exports=class Home{
        
  constructor(houseName,location,price,houseimage){
    this.houseName=houseName;
    this.price=price;
    this.location=location;
    this.houseimage=houseimage;
  }

save(){
  Home.fetchAll((registeredhomes)=>{
  registeredhomes.push(this);
  const homeDataPath=(path.join(__dirname,'../','data','homes.json'));
  fs.writeFile(homeDataPath,JSON.stringify(registeredhomes),error=>{
    console.log("file writing",error);
  })
})
}
static fetchAll(callback){

   const homeDataPath=(path.join(__dirname,'../','data','homes.json'));
 /*   fs.readFile(homeDataPath,(err,data)=>{
    if(!err){
      registeredhomes=JSON.parse(data);
    }
      return registeredhomes; */
      //if we will use above code the when the function fetchall will be called from controller/home.js,readfile is a asncychronous operation so  fetchAll will return undefined first than the readfile will execute thats why error will come as no data will be passed in registeredhomes that's why we will use callback

       fs.readFile(homeDataPath,(err,data)=>{
    if(!err){
      callback(JSON.parse(data));
    }
    else{
    callback([]);
    }
     })
  

}

}