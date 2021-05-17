function handleSubmit(event) {
    event.preventDefault()

    // Set variable to URL entered by user
    let formInput = document.getElementById('url').value;
    const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
	const apiKey = getApiInfo();

	const completeURL = `${baseURL}?key=${apiKey}&url=${formInput}&lang=en`;
	const mcData = getMeaningData(completeURL);

	updateUI(mcData);
};

// 	.then((mcData) => {
// 		console.log(mcData);
// 		document.getElementById('agreement').innerHTML = `Agreement: ${res.agreement}`;
// 		document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
// 		document.getElementById('irony').innerHTML = `Irony: ${res.irony}`;
// 		document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`;
// 		document.getElementById('polarity').innerHTML = `Polarity: ${res.score_tag}`;
// 	})
// }
//     else {
//         alert('The URL is invalid. Please enter a valid URL');
//     }
// };


// Function to get API Information
const getApiInfo = async() => {
	const response = fetch('http://localhost:8081/apiInfo');
	try {
		const apiKey = (await response).json();
		return apiKey;
	}
	catch (error) {
		console.log('error retrieving api key', error)
	}
};

// Function to get API Response
const getMeaningData = async(completeURL) => {
	const response = await fetch(completeURL);
	try {
		const meaningData = await response.json();
		return meaningData;
	}
	catch (error) {
		console.log('error retrieving MeaningData', error)
	}
};

// Function to update UI
function updateUI(data) {
	console.log(data);
	document.getElementById('agreement').innerHTML = `Agreement: ${data.agreement}`;
	document.getElementById('subjectivity').innerHTML = `Subjectivity: ${data.subjectivity}`;
	document.getElementById('irony').innerHTML = `Irony: ${data.irony}`;
	document.getElementById('confidence').innerHTML = `Confidence: ${data.confidence}`;
	document.getElementById('polarity').innerHTML = `Polarity: ${data.score_tag}`;
};


//Function to POST data
// const postData = async(url = '', data = {}) => {

// 	const response = await fetch (url, {
// 		method: 'POST',
// 		mode: 'cors',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify(data),
// 	});

// 	try {
// 		const newData = await response.json();
// 		return newData;
// 	}
// 	catch(error) {
// 		console.log('error:', error);
// 	}
// };


export { handleSubmit };