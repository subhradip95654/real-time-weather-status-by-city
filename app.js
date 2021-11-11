// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
const weatherapi = {
    key: "bab281d79e5f1e9755a68d754cc313e7",
    baseurl: "https://api.openweathermap.org/data/2.5/weather",
}
const searchinput = document.getElementById('input');
searchinput.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        console.log(searchinput.value);
        getWeatherReport(searchinput.value);

    }
})

function getWeatherReport(city) {
    fetch(`${weatherapi.baseurl}?q=${city}&appid=${weatherapi.key}&units=metric`).then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

function showWeatherReport(weather) {
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name},${weather.sys.country}`;

    let temp = document.getElementById('maintemp');
    temp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let min_max = document.getElementById('')
}