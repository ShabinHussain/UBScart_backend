//import dotenv- to load environment variables
require('dotenv').config()

//import express
const express = require('express')

//import cors
const cors = require('cors')

//import router
const router = require('./routes')


//import connection string
require('./db/connectiondb')






//create server
const Ubsserver = express()

//use cors()
Ubsserver.use(cors())

//use json() method - middleware
Ubsserver.use(express.json())

//use router
Ubsserver.use(router)


Ubsserver.use('/uploads',express.static('./uploads'))


//set port
PORT = 8000 || process.env.PORT

//listen to port
Ubsserver.listen(PORT,()=>{
    console.log(`Successfully running on port ${PORT}`);
    
})
