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
    });    
} 

displayCurrentWeather('Sibiu')
