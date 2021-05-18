// Required to keep API key private
const dotenv = require('dotenv');
dotenv.config();

// Dependencies
var path = require('path');
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch')

// Start up an instance of the app
const app = express();

// Initialize dist as project folder for app
app.use(express.static('dist'));

// Replaces body-parser with Express => v4.16
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(cors());

// Meaning Cloud API Data
const apiKey = process.env.API_KEY;
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';

// GET Route
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

// POST Route Using Node-Fetch as seen here:
// https://stackabuse.com/making-http-requests-in-node-js-with-node-fetch/
app.post('/meaningData', meaningData);

// Function for POST Route
function meaningData(req, res) {
    const userURL = req.body.formInput;
    fetch(`${baseURL}?key=${apiKey}&url=${userURL}&lang=en`, {
        method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
    })
    .then(apiresponse => apiresponse.json())
    .then(apiData => res.send(apiData))
    .catch(err => console.log('Error with API Fetch', err));
};

// Designates what port the app will listen to for incoming requests
const port = 3030;
app.listen(port, function (error) {
    if (error) console.log(error);
    console.log(`Example app listening on port: ${port}!`)
});

console.log(__dirname);
