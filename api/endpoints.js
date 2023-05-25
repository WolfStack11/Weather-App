const apiKey = '6720debcf0aa5831b1b638d105c45f8a';

function getCurrentWeatherEndPoint(city) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ro&appid=${apiKey}`
}

function getForecastEndPoint(city) {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=ro&appid=${apiKey}`
}
