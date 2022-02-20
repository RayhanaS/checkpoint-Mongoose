// import express 
const express = require('express');
const connectDB = require('./config/connectDB');
require("dotenv").config ();
const route = require('./route/route');

// init express 
const app = express();
 //create port
 const port = 4000 ;
 connectDB() 
 app.use(express.json ())

 // create a server 
 app.listen (port,  (err) => 
 err?console.log(err) : console.log (`server listening on port ${port}`));
app.use ("/api/contact",route)






