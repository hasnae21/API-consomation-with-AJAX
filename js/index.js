var input1 = document.getElementById('zone');

async function get(){
    const response = await fetch("http://api.weatherstack.com/current?access_key=92d9a8bc613a702a3273d1f3d81bffd7&query=Taza,Morocco");
    let data =await response.json()
    console.log(data);
//     console.log(data.current.humidity)
}
get();


// & language = ar makainaxi f api free
// Forecast
// & forecast_days = 7
// & hourly = 1
// & interval = 3


