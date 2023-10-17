const apikey = 'b29ad71d2f4fea6b8aedcddc17bf81f1';
const searchForm = document.querySelector("#searchForm");
let temp = "";
// TODO: creacte a function that will capture the user input
function captureCity(event) {
    event.preventDefault();
    const userInput = document.querySelector('#input').value;
    // // this is the value of what the user typed in
    fetchWeather(userInput);
    console.log("test")
}

// TODO: create a function that will fetch the data from the weather API
function fetchWeather(city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apikey).then(function (response) {
        return response.json()
    }).then(function (data) {
        temp = data.main.temp;
        console.log(data);
        let lon = data.coord.lon;
        let lat = data.coord.lat;
        let url_weather = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${apikey}`;
        fetch(url_weather).then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log(data)
            displayWeather(data)
        })
        
    })
}
function displayWeather(data){
    let currentTemp = data.current.temp
    let currentWind = data.current.wind_speed
    let currentHum  = data.current.humidity
    $("#Temp").text()
}


// TODO: add an event listener that will run the function when the form is submitted

searchForm.addEventListener('submit', captureCity)



