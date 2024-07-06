// City name
document.addEventListener("DOMContentLoaded", function () {
    const city = localStorage.getItem("city");
    if (city) {
        document.getElementById("headerCity").textContent = `${city}`;
    } else {
        document.getElementById("headerCity").textContent = "City not found";
    }
});

// Current weather image and message
const weatherConditions = {
    sunny: {
        image: 'assets/images/weather-condition-icons/sunny.svg',
        message: 'Its a bright day, use sunscreen to stay protected.'
    },

    cloudy: {
        image: 'assets/images/weather-condition-icons/cloudy.svg',
        message: 'It is cloudy today, there could be rain. Please take an umbrella with you.'
    },

    cold: {
        image: 'assets/images/weather-condition-icons/cold.svg',
        message: 'Its very cold outside, do not forgot to wear your coat beofre going out'
    },

    rainy: {
        image: 'assets/images/weather-condition-icons/rainy.svg',
        message: 'Its raining outside, please stay home if not necessary to go outside.'
    },

    snowy: {
        image: 'assets/images/weather-condition-icons/snowy.svg',
        message: 'Its snowing outside, wear warm clothes and make lots of snowmen.'
    },

    thunderstorm: {
        image: 'assets/images/weather-condition-icons/thunderstorm.svg',
        message: 'Its a thunderstorm outside, do not use electronic devices outside.'
    }

};

//Function to change weather image and message according to weather condition
function updateWeatherDisplay(condition) {
    const imgElement = document.getElementById('weather-image');
    const messageElement = document.getElementById('message');

    if (weatherConditions[condition]) {
        imgElement.src = weatherConditions[condition].image;
        messageElement.textContent = weatherConditions[condition].message;
    } else {
        imgElement.src = 'assets/images/weather-condition-icons/error.svg';
        messageElement.textContent = 'Weather condition not recognized.';
    }
}

// const currentWeather = 'rain';
// updateWeatherDisplay(currentWeather);

//Other details
function updateWeatherData(weatherData) {
    const humidityElement = document.getElementById('humidityID');
    const uvindexElement = document.getElementById('uvindexID');
    const windspeedElement = document.getElementById('windspeedID');
    const sunsetElement = document.getElementById('sunsetID');
    const sunriseElement = document.getElementById('sunriseID');
  
    humidityElement.textContent = `${weatherData.humidity}%`;
    uvindexElement.textContent = `${weatherData.uvindex}`;
    windspeedElement.textContent = `${weatherData.windspeed} km/h`;
    sunsetElement.textContent = `${weatherData.sunset}`;
    sunriseElement.textContent = `${weatherData.sunrise}`;
}
  
//   const weatherData = {
//     humidity: 50,
//     uvindex: 5,
//     windspeed: 10,
//     sunset: '7:45 PM',
//     sunrise: '6:15 AM'
//   };
  
//   updateWeatherData(weatherData);
  





