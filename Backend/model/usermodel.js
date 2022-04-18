const mongoose = require('mongoose');

const DbSchema = mongoose.Schema({
    fname:{
        type:String,
        required: true

    },
    lname:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
       
    },
    password:{
        type:String,
        required:true
    }
    // createdAt:{
    //     type: Date,
    //     default: Date.now
    // }
})

module.exports = mongoose.model('User',DbSchema)