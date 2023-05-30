function displayCurrentWeather(city){
    const getCurrentWeather = getCurrentWeatherEndPoint(city);
    fetch(getCurrentWeather)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        if(data.cod === '404') {
            document.querySelector('.error').style.visibility = "visible"
            document.querySelector('.current-city').innerHTML = 'invalid';
        } else {
            document.querySelector('.error').style.visibility = "hidden"
        }
        

        const { name, dt, main, weather, wind } = data

        const day = getDayOfTheWeek(dt);
        console.log(day);

        const time = getHour(dt);
        console.log(time);

        const temperature = Math.round(main.temp);
        console.log(temperature);

        const feelsLikeTemperature = Math.round(main.feels_like);
        console.log(feelsLikeTemperature);

        const weatherDescription = weather[0].description;
        console.log(weatherDescription);

        const weatherIcon = getWeatherIcon(weather[0].icon);
        console.log(weatherIcon);
        
        const windSpeed = windToKmPerHour(wind.speed).toFixed(2);
        console.log(windSpeed);

        const currentWeatherDiv = document.querySelector ('.current-weather')
        currentWeatherDiv.innerHTML =  `
        <div class="px-3">
            <div class="fs-2 mb-2"><strong>${name}</strong></div>
            <div class="fs-4"><strong>${day}</strong>, ${time}</div>
            <div class="d-flex align-items-center justify-content-center">
            <strong class="fs-1">${temperature}°C</strong>
            <img src="${weatherIcon}" />
            </div>
        </div>
        <div class="px-3">
            <p class="fs-5">Real feel: <strong>${feelsLikeTemperature}°C</strong></p>
            <p class="fs-5 text-capitalize">${weatherDescription}</p>
            <p class="fs-5">Vânt: <strong>${windSpeed} km/h</strong></p>
        </div>
        `;

        const weatherBackground = document.querySelector(".weather-bg");
        if(weather[0].id == 800) {
            weatherBackground.style.background = 'linear-gradient(0deg, rgba(98,204,255,1) 0%, rgba(1,128,194,1) 100%)';
        } else if (weather[0].id > 800 && weather[0].id < 804) {
            weatherBackground.style.background = 'linear-gradient(0deg, rgba(14,158,228,1) 0%, rgba(0,50,75,1) 100%)';
        } else if (weather[0].id >= 200 && weather[0].id <= 232) {
            weatherBackground.style.background = 'linear-gradient(0deg, rgba(111,134,151,1) 0%, rgba(161,172,183,1) 100%)';
        } else if (weather[0].id >= 500 && weather[0].id <= 531) {
            weatherBackground.style.background = 'linear-gradient(0deg, rgba(132,164,187,1) 0%, rgba(204,218,233,1) 100%)';
        } else if (weather[0].id >= 300 && weather[0].id <= 321) {
            weatherBackground.style.background = 'linear-gradient(0deg, rgba(150,194,226,1) 0%, rgba(217,236,255,1) 100%)';
        } else if (weather[0].id >= 701 && weather[0].id <= 781) {
            weatherBackground.style.background = 'linear-gradient(0deg, rgba(150,194,226,1) 0%, rgba(217,236,255,1) 100%)';
        }  else if (weather[0].id >= 600 && weather[0].id <= 622) {
            weatherBackground.style.background = 'linear-gradient(0deg, rgba(132,164,187,1) 0%, rgba(204,218,233,1) 100%)';
        }


    });    
} 



