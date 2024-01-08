const scriptURL = 'https://script.google.com/macros/s/AKfycbwddAbvjAqgHD_aCalDwVplYOTZBJSRF1JGZFHHTsFiHN5SKY2eSbDXsCm3vyDDmvFn/exec'
const form = document.getElementById('contact-form');
const prze = document.getElementById('przeslane');
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        alert("Dziękuję za skontaktowanie się ze mną. Postaram się jak najszybciej odpowiedzieć :) ");
        location.reload();
    })
    .catch(error => console.error('Error!', error.message))
})
