const { get } = require("mongoose");
const productmodel = require("../model/productsmodel");

const getproduct = async (req,res)=>{
 
    try{

        const fetch = await productmodel.find({});
        res.json(fetch)

    }catch(err){
        console.log(err)
    }


}



module.exports = {
    getproduct
}