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
        document.querySelector('.weather_body').style.display = "block";
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

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min) / 
    ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

    let weatherType = document.getElementById('comment');
    console.log(weatherType.innerText);
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let exact_date = new Date();
    date.innerText = manageDate(exact_date);

    if (weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('clear.jpg')";
    } else if (weatherType.textContent == 'Clouds') {
        document.body.style.backgroundImage = "url('cloud.jpg')";}
      else if (weatherType.textContent == 'Mist' || weatherType.textContent == 'Smoke') {
            document.body.style.backgroundImage = "url('mist.jpg')";
    } else if (weatherType.textContent == 'Haze') {
        document.body.style.backgroundImage = "url('haze.jpg')";
    } else if (weatherType.textContent == 'Rain') {
        document.body.style.backgroundImage = "url('rain.jpg')";
    } else if (weatherType.textContent == 'Snow') {
        document.body.style.backgroundImage = "url('snow.jpg')";
    } else if (weatherType.textContent == 'Thunderstorm') {
        document.body.style.backgroundImage = "url('thunderstorm.jpg')";
    }
}
function manageDate(exact_date)
{
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
    "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    let year = exact_date.getFullYear();
    let month = months[exact_date.getMonth()];
    let day = days[exact_date.getDay()];
    let date = exact_date.getDate();

    return `${date} ${month} (${day}), ${year}`;
}