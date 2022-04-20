const mongoose = require('mongoose');

const DbSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },

    desc:{
        type:String,
        required: true,
       
    }
    // createdAt:{
    //     type: Date,
    //     default: Date.now
    // }
})

module.exports = mongoose.model('Feedback',DbSchema)