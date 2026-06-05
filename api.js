'use strict';

// API key
export const apiKey = 'efccbbf3e5.5fbdf1ea274549b657275f';

// base URL
export const baseUrl = 'https://api.openweathermap.org/data/4.0';

// imageURL
export const imageURL = `https://openweathermap.org/img/wn/${weather.icon}@2x.png" alt="${weather.description}`;


export async function getWeather(city, country) {
    try {
        const response = await fetch(`${baseURL}/weather?q=${city},${country}&appid=${apiKey}`);

        const data = await response.json();

        return data.result;

    } catch (error) {

        console.error('Error fetching weather data:', error);

        return null;
    }
}