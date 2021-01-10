const timezoneAPI = "https://timezoneapi.io/api/ip/?token=aNsiQLfUDzdnhRxsLmJP";
const quotesAPI = "https://quotes.rest/yaml/theysaidso.quotes.openapi.yaml?v1.1/qod"
const time = document.getElementById("time");
const timezone = document.getElementById("timezone");
const position = document.getElementById("position");
const greetings = document.getElementById("greetings");
let url = 

fetch(timezoneAPI).then((response) => {
    return response.json();
}).then((data) => {
    position.innerText = `in ${data.data.timezone.capital}, ${data.data.timezone.country_code}`
}).catch((e) => {
    console.error(e);
});

fetch(quotesAPI).then(response => {
    return response.json
}).then(data => {
    console.log(data)
}).catch(e => {
    console.error(e)
});

(function showDate() {
    const date = new Date();
    if (date.getHours() > 12 && date.getHours() < 18) {
        greetings.innerText = "Good afternoon, it's currently"
    } else if (date.getHours() >= 18) {
        greetings.innerText = "Good evening, it's currently"
        document.body.style.backgroundImage = "url(img/night.jpg)"
    } else {
        greetings.innerText = "Good morning, it's currently"
    }

    let hours = date.getHours()
    let minutes = ''
    if (date.getMinutes() < 10) {
        minutes = `0${date.getMinutes()}`
    } else {
        minutes = date.getMinutes()
    }
    time.innerText = `${hours}:${minutes}`

    setTimeout(showDate, 1000);
})();


/* setInterval(function showDate() {
    const date = new Date();
    console.log(date.getHours(), date.getMinutes(), date.getSeconds())
    if (date.getHours() > 12 && date.getHours() < 18) {
        greetings.innerText = "Good afternoon, it's currently"
    } else if (date.getHours() > 18 && date.getHours()) {
        greetings.innerText = "Good evening, it's currently"
    } else {
        greetings.innerText = "Good morning, it's currently"
    }
}, 60000); */