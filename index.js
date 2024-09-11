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


// Configure CORS to allow requests from your frontend
const allowedOrigins = ['https://ub-scart-frontend.vercel.app', 'https://ub-scart-frontend.vercel.app'];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true
};

Ubsserver.use(cors(corsOptions));


//use cors()
//Ubsserver.use(cors())

//use json() method - middleware
Ubsserver.use(express.json())

//use router
Ubsserver.use(router)


Ubsserver.use('/uploads',express.static('./uploads'))


//set port
PORT = 6000 || process.env.PORT

//listen to port
Ubsserver.listen(PORT,()=>{
    console.log(`Successfully running on port ${PORT}`);
    
})
