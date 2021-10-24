const mongoose = require('mongoose');
const validator = require('validator');


const prodSchema = new mongoose.Schema({

    name:{type:String,required:true,trim:true},
    price:{type:Number,required:true,trim:true},
    description:{type:String,trim:true},
    category:{type:String,trim:true}

})

const Products = mongoose.model("products", prodSchema);
module.exports = Products;
