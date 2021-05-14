const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
const express = require('express');
const cors = require('cors');

// Start up an instance of the app
const app = express();

// Initialize dist as project folder for app
app.use(express.static('dist'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());


// GET Route
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

// Designates what port the app will listen to for incoming requests
const port = 8081;
const server = app.listen(port, function (error) {
    if (error) console.log(error);
    console.log(`Example app listening on port: ${port}!`)
});

// Test GET Route
const mockAPIResponse = require('./mockAPI.js');
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});

console.log(__dirname);