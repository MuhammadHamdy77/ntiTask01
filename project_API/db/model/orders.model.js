const mongoose = require('mongoose');
const validator = require('validator');

const orderSchema  = mongoose.Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    product:{
        
        type:Array
    }
})
const Orders = mongoose.model('order',orderSchema)
module.exports = Orders