const h1 = document.querySelector('h1');
h1.style.textAlign = 'center';
const form = document.querySelector('form');
const input = document.querySelector('input');
const body = document.querySelector('body');
const container = document.querySelector('.container');
const weatherInLocation = document.querySelector('.weatherinLocation')
const temperatureInLocation = document.querySelector('.temperatureinLocation');
const windSpeedInLocation = document.querySelector('.windSpeedInLocation');
const humidityInLocation = document.querySelector('.humidityInLocation')
const theWeatherInLocation = document.querySelector('.theWeatherInLocation')
const weatherImgInLocation = document.querySelector('.weatherImgInLocation')
const temperatureInLocationItalicText = document.querySelector('.temperatureInLocation span')
const displayAllH3 = document.querySelectorAll('.weatherStyles h3')

form.addEventListener('submit', async function(e) {
    try {
        e.preventDefault()
        const inputValue = form.elements.searchLocation.value;
        const res = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + inputValue + '&appid=712a3f2932621a75cf87e4e875febe7f')
        if (res == undefined || res == '') {
            console.error('ERROR NO RESPONSE FOUND')
        }
        const locationName = res.data.name;
        cityName(locationName)
        const cityTemperature = res.data.main.temp;
        temperature(cityTemperature)
        const myWeather = res.data.weather[0].icon
        createNewImg(myWeather)
        const weatherInCity = res.data.weather[0].description
        cityWeather(weatherInCity)
        const cityWindSpeed = res.data.wind.speed;
        const cityWindSpeedDeg = res.data.wind.deg
        windSpeed(cityWindSpeed, cityWindSpeedDeg)
        const cityHumidity = res.data.main.humidity
        humidity(cityHumidity)
        toggleStyle()
        form.elements.searchLocation.value = '';
    } catch (err) {
        console.log('OOPS AN ERROR OCCURRED', err)
    }
})

const createNewImg = function(mySrc) {
    weatherImgInLocation.src = `https://openweathermap.org/img/w/${mySrc}.png`
    weatherImgInLocation.classList.add('imgStyle')
}


function cityName(city) {
    weatherInLocation.textContent = `The Weather In ${city}`;
    weatherInLocation.classList.add('cityName')
}

function temperature(temp) {
    temperatureInLocation.innerHTML = `<span>°F</span> ${temp}`
    temperatureInLocation.classList.add('temp')
}

function humidity(procent) {
    humidityInLocation.textContent = `Humidity ${procent}`
    humidityInLocation.classList.add('humidity')
}

function windSpeed(speed, deg) {
    windSpeedInLocation.textContent = `Wind Speed ${speed}  ${deg}°`;
    windSpeedInLocation.classList.add('speed')
}

function cityWeather(weather) {
    theWeatherInLocation.textContent = `Current Weather is  ${weather}`
    theWeatherInLocation.classList.add('weather')
}