// Basic Packages Import
const express = require('express');
const app = new express();
const bodyParser = require('body-parser');
const router = require('./src/routes/api');
// Security Middleware Packages Import
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const hpp = require('hpp');
const xssClean = require('xss-clean');
const cors = require('cors');
// Database Packages Import
const mongoose = require('mongoose');

// Imported Packages Use
// Security ------------
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xssClean());
app.use(hpp());

// Body Parser ----------
app.use(bodyParser.json());

// Setup Request Rate Limit
const limiter = rateLimit({WindowMs:15*60*100,max:3000});
app.use(limiter);


let URI = "mongodb://127.0.0.1:27017/StudentDB";
let OPTIONS = {user:'',pass:''}
mongoose.connect(URI,OPTIONS).then(() => console.log("Connected Successfully"))
.catch((err) => {
  console.error(err);
});

// Routing Implement
app.use('/api/v1',router);

// Undefine Route
app.use('*',(req,res)=>{
    res.status(404).json({status:'fail',data:'Not Found'});
});


module.exports = app;