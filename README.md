# Evaluate a News Article with Natural Language Processing

The goal of this project was to create an application that uses web tools to analyze the text content from a webpage with Natural Language Processing(NLP) using the Meaning Cloud Platform.

Please visit Meaning Cloud to explore more about NLP and sign up for a personal API Key.
```
https://www.meaningcloud.com
```
The application works by allowing a user to submit a valid URL address into the form provided and having the text at that URL analyzed for sentiment.

## Get Up and Running

To begin, please fork this repo, then clone the forked repo.

Next, sign up for a personal API Key with Meaning Cloud, as shown above.

Create a file with the title `.env` in the root directory of the project.
Within this file, please enter the following:
```
API_KEY=****************
```
(where the ****** is replaced with your unique API Key)

Next:
`cd` into your new folder and run:
- ```npm install```
- ```npm run start``` to start the app
- this app runs on localhost:3030, but you can of course edit that in index.js