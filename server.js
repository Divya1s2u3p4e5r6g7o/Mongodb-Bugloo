console.log("Bugloo server Intialized.");
//npm install mongoose --save
const mongoose=require('mongoose');
// npm install express --save
const express=require('express');
// npm install dotenv --save 
/* Require Dot env because we need which port would be intialize*/
require("dotenv").config();
// npm install cors --save
var cors = require('cors');
// npm install body-parser --save
var bodyparser = require('body-parser');
/*Initializing express*/
var app=express();
/*Database URL */
const dbConfig=require('./config/db');


/* Intializing Cors */
app.use(cors({'allowedHeaders': ['sessionId', 'Content-Type', 'authorization'],
'exposedHeaders': ['sessionId'],
'origin': '*',
'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
'preflightContinue': false,
'Access-Control-Allow-Headers': 'Content-Type',
'Access-Control-Allow-Methods': 'GET, POST',
'Access-Control-Allow-Origin': '*'}));
/* Intializing Body-Parser */
app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json());

/*APP IS Listening on PORT 7399*/
app.listen(5000);
console.log("API SERVER PORT IS RUNNING ON :" + 5000);

//  router manages routing for application such as companies, in, customers,projects,tickets,roles,ticketlogs,users.
var companiesRoutes = require('./routes/companies.routes')
app.use('/companies',companiesRoutes);