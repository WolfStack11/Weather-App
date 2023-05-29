function displayWeatherForecast(city) {
    const weatherForecastDiv = document.querySelector('.weather-forecast');
    const getForecastWeather = getForecastEndPoint(city);
    fetch(getForecastWeather)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        weatherForecastDiv.innerHTML = '';
        const daysMap = {};
        const { list } = data;
        
        list.forEach((element) => {
            const { dt } = element;
            const day = getDayOfTheWeek(dt);
            if(daysMap[day]) {
                daysMap[day].push(element);
            } else {
                daysMap[day] = [element];
            }
        })

        for( key in daysMap) {
            weatherForecastDiv.innerHTML += `<h3 class="text-primary">${key}</h3>`;
            days = daysMap[key];
            days.forEach((element) => {
                const {dt, main, weather} = element;

                const hour = getHour(dt);
                const temperature = Math.round(main.temp);
                const feelsLikeTemp = Math.round(main.feels_like);
                const weatherDescription = weather[0].description;
                const weatherIcon = getWeatherIcon(weather[0].icon);

                weatherForecastDiv.innerHTML += `
                <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
                    <div>${hour}</div>
                    <div><img src="${weatherIcon}" alt="" /></div>
                    <div class="fs-3"><strong>${temperature}°C</strong></div>
                    <div>${weatherDescription}</div>
                    <div class="real-feel">Real feel: <strong>${feelsLikeTemp}°C</strong></div>
                </div>` ;
            });
        }
    });
}


