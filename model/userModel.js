//import mongoose

const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true //unique email id
    },
    password:{
        type:String,
        required:true
    }
})

const users = mongoose.model("users",userSchema)

module.exports = users