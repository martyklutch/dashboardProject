'use strict';

import { displayWeather } from  './dashboardContents/weatherUI.js';

import { getWeather, getNews } from './api.js';

import { displayNews } from "./dashboardContents/newsUI.js";


const weatherContainer = document.querySelector('.weatherUI');

async function initDashboard() {
    try {
        const weatherData = await getWeather('Rancho Cucamonga') ;
        displayWeather(weatherData, weatherContainer);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }

}



initDashboard();

const  newsContainer = document.querySelector('.newsUI');

async function initNews() {
    try {
        const newsData = await getNews('news');
        displayNews(newsData, newsContainer);
    } catch (error) {
        console.error('Error fetching news data:', error);
    }
}

initNews();