var mongoose = require('mongoose');

const registerSchema = mongoose.Schema({

    name:{
        type:String
    },
    email:{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    confirm_password:{
        type:String,
        require:true
    }

});

const register = mongoose.model('register',registerSchema);

module.exports = register;