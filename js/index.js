async function get(){
    const response = await fetch("https://www.weatherapi.com/docs/conditions.json")
    const data =await response.json()
    console.log(data)
    // document.write(data);
}
get();
