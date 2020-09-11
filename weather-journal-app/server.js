//Setting up a server-side server at port 3000

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
//dependencies 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));
const port = 3000;

// Setup Server
//Express server is created using the listening method. 
//Takes two arguments - a port to run the server on and a callback function to execute (listening).  
const server = app.listen(port, listening);
function listening(){
    console.log("Server Running...");
    console.log(`This site is running on localhost: ${port}`);
};