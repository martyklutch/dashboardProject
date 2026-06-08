'use strict';

import { weatherKey, newsKey } from "./apiKeys.js";


// base URL
export const weatherBaseUrl = 'https://api.openweathermap.org/data/2.5';

export const units = 'imperial';

export const newsBaseUrl = 'https://content.guardianapis.com/'


export async function getWeather(city) {
    const state = 'CA';
    const country = 'US';

    try {
        const response = await fetch(`${weatherBaseUrl}/forecast?q=${city},${state},${country}&appid=${weatherKey}&units=${units}`);

        const data = await response.json();

        const cityName = data.city.name;

        const forecast = data.list.filter(curr => curr.dt_txt.includes('12:00:00'));

        return { cityName, forecast};



    } catch (error) {
        console.error('Error fetching weather data:', error);
        return { cityName: '', forecast: [] };
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