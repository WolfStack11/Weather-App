function displayCurrentWeather(city){
    const getCurrentWeather = getCurrentWeatherEndPoint(city);
    fetch(getCurrentWeather)
    .then(response => response.json())
    .then(data => {
        console.log(data);
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
    });    
} 



