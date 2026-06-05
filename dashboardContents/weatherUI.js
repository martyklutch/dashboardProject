'use strict';

import {apiKey} from '../api.js';


// grabs the class weatherUI from the HTML
const container = document.querySelector('.weatherUI');

// function to display the weather
export function displayWeather(weather, container,  emptyMessage =  'There is no data available.') {
    container.innerHTML = '';

    if(!weather) {
        container.innerHTML = `<p>${emptyMessage}</p>`;
        return;
    }

    // destructure the weather object
    const {city, country} = weather;

    const url = `https://api.openweathermap.org/data/4.0/weather?q=${city},${country}&appid=${apiKey}`;


    weather.forEach(weather => {
        const weatherCard = document.createElement('div');
        weatherCard.classList.add('weatherCard');
        weatherCard.innerHTML = `
            <img class="weather-img" src="https://openweathermap.org/img/wn/${weather.icon}@2x.png" alt="${weather.description}">
                <div class="weather-data">
                  <h2>${weather.city}</h2>
                  <h3>${weather.description}</h3>
                </div>  
        
        `;
    })

}