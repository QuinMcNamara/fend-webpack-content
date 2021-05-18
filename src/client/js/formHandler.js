import {isURL} from './isURL';

function handleSubmit(event) {
    event.preventDefault();

    // Set variable to URL entered by user
    const formInput = document.getElementById('url').value;

	if(isURL(formInput)) {
		let validURL = {formInput};
		fetch('http://localhost:3030/meaningData', {
			method: 'POST',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(validURL)
		})
		.then(res => res.json())
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
        alert('The URL is invalid. URL must begin with http');
    }
};

export {
	handleSubmit
};
