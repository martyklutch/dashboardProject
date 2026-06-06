'use strict';

import { weatherKey } from "./apiKeys.js";


// base URL
export const baseUrl = 'https://api.openweathermap.org/data/2.5';

export const units = 'imperial';


export async function getWeather(cityName) {


    try {
        const response = await fetch(`${baseUrl}/weather?q=${cityName}&appid=${weatherKey}&units=${units}`);

        const data = await response.json();

        return data;

    } catch (error) {

        console.error('Error fetching weather data:', error);

        return null;
    }
}