var input1 = document.getElementById('zone');

//consommer des donnees de mon api weatherstack
var input2 =document.getElementById("time");
let icon = document.getElementById("icon");
let weather = document.getElementById("weather");
let temperature = document.getElementById("temperature");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let text3 = document.getElementById("text3");
let text4 = document.getElementById("text4");
//${zone}

input1.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      var zone = input1.value;
      
async function current(){
    const response = await fetch(`http://api.weatherstack.com/current?access_key=cf694fad92309bad4c2bb40c477d8a16&query=${zone}`);
    let data =await response.json();
    console.log(data);

    icon.src= data.current.weather_icons;
    weather.textContent= data.current.weather;
    temperature.textContent= data.current.temperature;
    text1.textContent= data.current.humidity;
    text2.textContent= data.current.precip;
    text3.textContent= data.current.pressure;
    text4.textContent= data.current.wind_speed;
    
}current();


}});
