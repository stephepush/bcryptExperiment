const area = document.getElementById("responseArea")

//area.innerHTML = `<h1> Hello World! </h1>`;

const button = document.getElementById("submit-button");

button.addEventListener("click", launchAjax);

/* const launchAjax = (formData) => {
    fetch("/submit-form", {
            method: "POST",
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(responseJSON => {
            area.innerText = responseJSON;
        })
} */

const launchAjax = fetch('/submit-form')
    .then(res => res.json())
    .then((data) => {
        area.textContent += data.output;
    })