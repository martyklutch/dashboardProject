'use strict';

import { weatherKey, newsKey } from "./apiKeys.js";


// base URL
export const weatherBaseUrl = 'https://api.openweathermap.org/data/2.5';

export const units = 'imperial';

export const newBaseUrl = 'https://gnews.io/api/v4/'


export async function getWeather(cityName) {


    try {
        const response = await fetch(`${weatherBaseUrl}/weather?q=${cityName}&appid=${weatherKey}&units=${units}`);

        const data = await response.json();

        return data;

    } catch (error) {

        console.error('Error fetching weather data:', error);

        return null;
    }
}


export async function getNews( query ) {
    try {
        const response = await fetch(`${newBaseUrl}search?q=${query}&lang=en&country=us&max=6&apikey=${newsKey}`);

        const data = await response.json();
        console.log(data);

        return data.articles;

    } catch (error) {

        console.error('Error fetching news data:', error);
    }
}