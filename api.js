'use strict';

import { weatherKey, newsKey } from "./apiKeys.js";


// base URL
export const weatherBaseUrl = 'https://api.openweathermap.org/data/2.5';

export const units = 'imperial';

export const newsBaseUrl = 'https://content.guardianapis.com/'


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


export async function getNews() {
    try {
        const response = await fetch(`${newsBaseUrl}search?q=technology&show-fields=trailText,thumbnail,headline&api-key=${newsKey}`);

        const data = await response.json();
        console.log(data);

        return data.response.results;

    } catch (error) {

        console.error('Error fetching news data:', error);
    }
}