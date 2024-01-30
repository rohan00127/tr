const dbs = require("./database/connection");
const productmodel = require("./model/productsmodel");
const p = require("./data.json");

const start = async ()=>{
   try{

 
    await productmodel.create(p);
    console.log("Sucess")

    }catch(err){
     console.log(err)
    }
      
}

start();