const APIKey = "946d11b9f5340e4baa8967124ebc0fb8";
const APIURL = "https://api.openweathermap.org/data/2.5/weather?q=Delhi";

async function checkweather(){
    const response = await fetch(APIURL + `&appid = ${APIKey}`);

    var data = await response.json();
    console.log(data);
}

checkweather();