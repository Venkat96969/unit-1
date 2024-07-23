// Import necessary modules
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let router = require('./router');

// Start App
let app = express();

// Assign port
var port = process.env.PORT || 3000;

// Use body parser to handle the POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
const dbPath = 'mongodb://localhost/firstrest';
mongoose.connect(dbPath)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(error => {
        console.log('Error connecting to MongoDB:', error);
    });

// Use the router
app.use('/', router);

// Launch app to the specified port
app.listen(port, function () {
    console.log("Running FirstRest on Port " + port);
});
