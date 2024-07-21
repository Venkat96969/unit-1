// Import Express
let express = require('express');

// Import Body-Parser
let bodyParser = require('body-parser');

// Import Mongoose
let mongoose = require('mongoose');

// Import the router
let router = require('./router');

// Start App
let app = express();

// Configure Body-Parser to handle POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB with Mongoose
const dbPath = 'mongodb://localhost/firstrest';
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(dbPath, options)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });

// Assign port
const port = process.env.PORT || 3000;

// Use the router
app.use('/', router);

// Launch app to the specified port
app.listen(port, () => {
    console.log(`Running FirstRest on Port ${port}`);
});
