const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    productName:{
        type:String,
        required:true
    },

    category:String,

    price:Number,

    stock:Number,

    description:String,

    createdAt:{
        type:Date,
        default:Date.now
    }

});

module.exports =
mongoose.model("Product",productSchema);