const Products = require('../db/model/products.mode');

class ProductController{

   static allProd =  async(req,res)=>{

    try{

        let allProd = await Products.find()
        if(!allProd) res.status(404).send({apiStatus:false,data:"",message: "Nout Found Data"})
        res.status(200).send({apiStatus:true,data:allProd,message:"All Data"})
    }
    catch(e){

        res.status(500).send({apiStatus:false,data:"",message: "No Data"})
    }
   }

   static addProd =  async(req,res)=>{

    // Add Product
    let product = new Products(req.body)
    try{
        
        await product.save()
        res.status(200).send({
            apiStatus:true,
            message: "Added Product Success",
            data:product,
        })
    }
    catch(e){

        res.status(500).send({
            apiStatus:false,
            data:e.message,
            message: "Add Product Error"
        })
    }
   }
   static singProd = async (req,res)=>{

     const prodId = req.params.id

     try{

        const product = await Products.findById(prodId)
        await product.save()
        res.status(200).send({apiStatus:true,data:product,message:"Product Data"})
     }
     catch(e){
         
        res.status(500).send({apiStatus:false , data:"",message:e.message})
     }
   }

   static delProd = async (req,res)=>{


    try{
       let product = await Products.findByIdAndDelete(req.params.id)
       console.log(req.params.id);
       if(!product) res.status(404).send({apiStatus:false, data:"", message:"Product not found"})
       res.status(200).send({apiStatus:true,data:"deleted",message:"deleted"})
    }
    catch(e){
        
       res.status(500).send({apiStatus:false , data:"",message:e.message})
    }
  }
}


module.exports = ProductController