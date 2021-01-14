const timezoneAPI = "https://timezoneapi.io/api/ip/?token=aNsiQLfUDzdnhRxsLmJP";
let quote = document.getElementById("quote")
const author = document.getElementById("author")
const time = document.getElementById("time");
const timezone = document.getElementById("timezone");
const position = document.getElementById("position");
const greetings = document.getElementById("greetings");
const reloadBtn = document.getElementById("reload-btn")
let quotes = [];

fetch("quotes.json").then(response => {
    return response.json()
}).then(data => {
    quotes = data
    let randomNumber = Math.floor((Math.random() * data.quotes.length))
    let randomQuote = `"${data.quotes[randomNumber].quote}"`
    quote.innerText = randomQuote
    author.innerText = data.quotes[randomNumber].author
});

reloadBtn.addEventListener('click', () => {
    let randomNumber = Math.floor((Math.random() * quotes.quotes.length))
    let randomQuote = `"${quotes.quotes[randomNumber].quote}"`
    quote.innerText = randomQuote
    author.innerText = quotes.quotes[randomNumber].author
})

fetch(timezoneAPI).then((response) => {
    return response.json();
}).then((data) => {
    position.innerText = `in ${data.data.timezone.capital}, ${data.data.timezone.country_code}`
    timezone.innerText = `${data.data.datetime.offset_tzab}`
}).catch((e) => {
    console.error(e);
});

(function showDate() {
    const date = new Date();
    if (date.getHours() >= 6  && date.getHours() < 12) {
        greetings.innerText = "Good morning, it's currently"
        document.body.style.backgroundImage = "url(img/day.jpg)"
    } else if (date.getHours() >= 12 && date.getHours() < 18) {
        greetings.innerText = "Good afternoon, it's currently"
        document.body.style.backgroundImage = "url(img/afternoon.jpg)"
    } else if (date.getHours() >= 18 && date.getHours() < 0) {
        greetings.innerText = "Good evening, it's currently"
        document.body.style.backgroundImage = "url(img/night.jpg)"
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