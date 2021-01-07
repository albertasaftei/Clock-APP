const endpoint = "https://timezoneapi.io/api/ip/?token=aNsiQLfUDzdnhRxsLmJP"

fetch(endpoint).then(response => {
    return response.json();
}).then(data => {
    
})


(function showDate(){
    const date = new Date();
    console.log(date.getHours(), date.getMinutes(), date.getSeconds())
    setTimeout(showDate, 60000);
})();