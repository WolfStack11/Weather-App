const currentCityTag = document.querySelector('.current-city');
let currentCity = localStorage.getItem('city');

if(!currentCity) {
    localStorage.setItem('city', 'București');
    currentCity = 'București';
}

currentCityTag.innerHTML = currentCity;
displayCurrentWeather(currentCity);
displayWeatherForecast(currentCity);

const scrollBtn = document.querySelector('.scroll-to-top');

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});

document.addEventListener('scroll', () => {
    if (window.scrollY > 800){
        scrollBtn.style.visibility = 'visible';
    }else {
        scrollBtn.style.visibility = 'hidden';
    }
});

