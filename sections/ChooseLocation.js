const dropdownBucharest = document.querySelector('.bucharest');
const dropdownTimisoara = document.querySelector('.timisoara');
const dropdownOradea = document.querySelector('.oradea');


function updateCurrentCity(city) {
    const currentCity = document.querySelector('.current-city');
    currentCity.innerHTML = city;
}

function updateWeather (city) {
    localStorage.setItem('city', city);
    updateCurrentCity(city);
    displayCurrentWeather(city);
    displayWeatherForecast(city);
}

// dropdownBucharest.addEventListener('click', () => {
//     updateWeather('București');
// });

// dropdownTimisoara.addEventListener('click', () => {
//     updateWeather('Timișoara');
// });

// dropdownOradea.addEventListener('click', () => {
//     updateWeather('Oradea');
// });

const searchBtn = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');

searchBtn.addEventListener ('click', () => {
    updateWeather(searchInput.value);
})
