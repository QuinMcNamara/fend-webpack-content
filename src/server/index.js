apiData = {};

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

// Meaning Cloud API Variables
const apiKey = process.env.API_KEY;
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
let formEntry = '';

// POST Route
app.post('/api', async (req, res) => {
    formEntry = req.body.url;
    const response = await fetch(`${baseURL}?key=${apiKey}&url=${formEntry}&lang=en`);
    apiData = response.json();
    res.send(apiData);
});

// GET Route
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

// Designates what port the app will listen to for incoming requests
const port = 8081;
app.listen(port, function (error) {
    if (error) console.log(error);
    console.log(`Example app listening on port: ${port}!`)
});

console.log(__dirname);