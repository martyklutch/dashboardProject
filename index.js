'use strict';

import { displayWeather } from  './dashboardContents/weatherUI.js';

import { getWeather } from './api.js';


const weatherContainer = document.querySelector('.weatherUI');

async function initDashboard() {
    try {
        const weatherData = await getWeather('london') ;
        displayWeather(weatherData, weatherContainer);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

initDashboard();