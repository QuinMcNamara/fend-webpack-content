function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value
    Client.isURL(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('agreement').innerHTML = `Agreement: ${data.agreement}`;
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${data.subjectivity}`;
        document.getElementById('irony').innerHTML = `Irony: ${data.irony}`;
        document.getElementById('confidence').innerHTML = `Confidence: ${data.confidence}`;
        document.getElementById('polarity').innerHTML = `Polarity: ${data.polarity}`;
    })
}

export { handleSubmit };