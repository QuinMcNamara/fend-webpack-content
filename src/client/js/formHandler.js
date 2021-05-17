function handleSubmit(event) {
    event.preventDefault()

    // Set variable to URL entered by user
    let formInput = document.getElementById('url').value
    

	// Check for Valid URL 
    if (Client.isURL(formInput)) {

        console.log("::: Form Submitted :::")
        postData('http://localhost:8081/api', {input: formInput})

		// Modeled after code here: https://bithacker.dev/fetch-weather-openweathermap-api-javascript
		// Updates UI Text
        .then((res) => {
			console.log(res);
            document.getElementById('agreement').innerHTML = `Agreement: ${res.agreement}`;
            document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
            document.getElementById('irony').innerHTML = `Irony: ${res.irony}`;
            document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`;
            document.getElementById('polarity').innerHTML = `Polarity: ${res.score_tag}`;
        })
    }
    else {
        alert('The URL is invalid. Please enter a valid URL');
    }
};

//Function to POST data
const postData = async(url = '', data = {}) => {

	const response = await fetch (url, {
		method: 'POST',
		mode: 'cors',
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


export { handleSubmit };