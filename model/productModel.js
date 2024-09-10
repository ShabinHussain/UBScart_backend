const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    price:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    prodImage:{
        type:String,
        required:true
    },
    
    userId:{
        type:String,
        required:true
    }




})




const products = mongoose.model("products",productSchema)

module.exports = products