// API information
const APIkey = "946d11b9f5340e4baa8967124ebc0fb8";
const APIurl = "https://api.openweathermap.org/data/2.5/weather?";

let Current_Weather_Global;

console.log("Check point 1");

// Retrieve city name from local storage
const city = localStorage.getItem("city");

if (city) {
    checkweather(city);
} else {
    alert("City not found!");
}

console.log("Check point 2");

// Function to check weather
async function checkweather(city) {
    const response = await fetch(`${APIurl}q=${city}&appid=${APIkey}&units=metric`);
    const data = await response.json();

    console.log(data);

    // Update the weather details on the page
    document.querySelector('#headerCity').innerHTML = data.name;

    document.querySelector('#current-weather').innerHTML = `Current temperature = ${data.main.temp}°C`;

    document.querySelector('#minimum-weather').innerHTML = `Minimum temperature = ${data.main.temp_min}°C`;

    document.querySelector('#maximum-weather').innerHTML = `Maximum temperature = ${data.main.temp_max}°C`;

    document.querySelector('#humidityID').innerHTML = data.main.humidity + "%";

    document.querySelector('#windspeedID').innerHTML = data.wind.speed + " Kmph";

    document.querySelector('#sunriseID').innerHTML = new Date(data.sys.sunrise * 1000).toLocaleTimeString();

    document.querySelector('#sunsetID').innerHTML = new Date(data.sys.sunset * 1000).toLocaleTimeString();

    const Current_Weather_local = data.weather[0].main;
    Current_Weather_Global = Current_Weather_local;


    updateWeatherDisplay(Current_Weather_Global);
}

console.log("Check point 3");

const weatherConditions = {
    Clear: {
        image: 'assets/images/weather-condition-icons/sunny.svg',
        message: 'It\'s a bright and sunny day!'
    },
    Clouds: {
        image: 'assets/images/weather-condition-icons/cloudy.svg',
        message: 'It\'s cloudy with a chance of rain.'
    },
    Rain: {
        image: 'assets/images/weather-condition-icons/rainy.svg',
        message: 'It\'s raining outside, don\'t forget your umbrella!'
    },
    cold: {
        image: 'assets/images/weather-condition-icons/cold.svg',
        message: 'It\'s cold outside, do not forget to wear your coat.'
    },
    Snow: {
        image: 'assets/images/weather-condition-icons/snowy.svg',
        message: `It\'s snowing outside, wear your coat and make lots of snowman.`
    },
    Thunderstorm: {
        image: 'assets/images/weather-condition-icons/thunderstorm.svg',
        message: `It\'s a thunderstorm outside, try to stay home if possible.`
    },
    Mist: {
        image: 'assets/images/weather-condition-icons/mist.svg' ,
        message: `It\'s mist outside, drive safely`
    },
    Haze: {
        image: 'assets/images/weather-condition-icons/haze.svg',
        message: `It\'s hazy outside today.`
    }
};

console.log("Check point 4");

function updateWeatherDisplay(Current_Weather_Global) {
    const imgElement = document.getElementById('weather-image');
    const messageElement = document.getElementById('weather-message');

    if (weatherConditions[Current_Weather_Global]) {
        imgElement.src = weatherConditions[Current_Weather_Global].image;
        messageElement.textContent = weatherConditions[Current_Weather_Global].message;
    } else {
        imgElement.src = '';
        messageElement.textContent = 'Weather condition not recognized.';
    }
}

console.log("Check point 5");


