function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formInput = document.getElementById('url').value
    
    if (Client.isURL(formInput)) {

        console.log("::: Form Submitted :::")
        fetch('http://localhost:8081/test')
        .then(res => {
            return res.json()
        })
        .then(function(res) {
			console.log(res);
            document.getElementById('agreement').innerHTML = `Agreement: ${res.agreement}`;
            document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
            document.getElementById('irony').innerHTML = `Irony: ${res.irony}`;
            document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`;
            document.getElementById('polarity').innerHTML = `Polarity: ${res.polarity}`;
        })
    }
    else {
        alert('The URL is invalid. Please enter a valid URL');
    }
}

//Function to GET Web API Data
const retrieveData = async(baseURL, zipCode, apiKey) => {
	const response = await fetch(`${baseURL}zip=${zipCode}&appid=${apiKey}`)
	try {
		const allData = await response.json();
		return allData;
	}
	catch(error) {
		console.log('error:', error);
	}
};

//Function to POST data
const postData = async(url = '', data = {}) => {

	const response = await fetch (url, {
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	try {
		const newData = await response.json();
		return newData;
	}
	catch(error) {
		console.log('error:', error);
	}
};

//Function to GET Project data and update UI
// Modeled after code here: https://bithacker.dev/fetch-weather-openweathermap-api-javascript
const updateUI = async() => {
	const request = await fetch('/all');
	try {
		const weatherData = await request.json();
		document.getElementById('date').innerHTML = `Date: ${weatherData.date}`;
		document.getElementById('temp').innerHTML = `Current Temp: ${fahrenheit(weatherData.temp)}`;
		document.getElementById('content').innerHTML = `Current Feeling: ${weatherData.content}`;
	}
	catch(error) {
		console.log('error:', error);
	}
};


export { handleSubmit };