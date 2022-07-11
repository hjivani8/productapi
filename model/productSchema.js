const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

    p_name:{
        type:String
    },
    p_price:{
        type:Number
    },
    p_discription:{
        type:String
    },
    p_image:{
        type:String
    }

});

const product = mongoose.model('product',productSchema);

module.exports = product;