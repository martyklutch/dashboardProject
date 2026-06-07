'use strict';




// function to display the weather
export function displayWeather(data, weatherContainer, emptyMessage =  'There is no data available.') {
    weatherContainer.innerHTML = '';

    if(!data) {
        weatherContainer.innerHTML = `<p>${emptyMessage}</p>`;
        console.log(data);
        return;
    }
    // imageURL
        const imageURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        const weatherCard = document.createElement('div');
        weatherCard.classList.add('weatherCard');
        weatherCard.innerHTML = `
            <img class="weather-img" src="${imageURL}" alt="${data.weather[0].description}">
                <div class="weather-data">
                  <h2 class="weather-header">${data.name}</h2>
                  <h3 class="weather-temp">${Math.round(data.main.temp)}<sup>°F</sup></h3>
                  <p class="weather-desc">${data.weather[0].description}</p>
                </div>  
        
        `;

weatherContainer.appendChild(weatherCard);
}