const apikey = 'b29ad71d2f4fea6b8aedcddc17bf81f1';
const searchForm = document.querySelector("#searchForm");
let temp = "";
// TODO: creacte a function that will capture the user input
function captureCity(event) {
    event.preventDefault();
    const userInput = document.querySelector('#input').value;
    // // this is the value of what the user typed in
    fetchWeather(userInput);
    fetchForecast(userInput)
    console.log("test")
}

// TODO: create a function that will fetch the data from the weather API
function fetchWeather(city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apikey).then(function (response) {
        return response.json()
    }).then(function (data) {
        temp = data.main.temp;
        wind = data.wind.speed;
        humidity = data.main.humidity;
        console.log(data);
            displayWeather(data);         
    })

}
function fetchForecast(city){
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + apikey).then(function (response) {
        return response.json()
    }).then(function (data) {
       var forecastDisplay = document.querySelector('.display')
        console.log(data);
     var forecastArray = [data.list[0], data.list[7], data.list[15], data.list[23], data.list[32]]
        forecastDisplay.innerHTML = ''
        for (let index = 0; index < 5; index++) {

            var div = document.createElement('div')
            div.setAttribute('class', "card col-2 mx-1")
            
           div.innerHTML = `
           <h4 class="cardOneDate">day one</h4>
           <img src=" https://openweathermap.org/img/wn/02d@2x.png" alt="weather_icon">
           <p>Temperature <span class="cardOneTemp">${forecastArray[index].main.temp}</span></p>
           <p>Wind <span class="cardOneWind">${forecastArray[index].wind.speed}</span></p>
           <p>Humidity <span class="cardOneHumid">${forecastArray[index].main.humidity}</span></p>
         `
            
         forecastDisplay.append(div) 
        }
        
        
    })
}

function displayWeather(data){
    let currentTemp = data.main.temp
    let currentWind = data.wind.speed
    let currentHum  = data.main.humidity
    document.querySelector(".temp").textContent = `${currentTemp} degrees`;
    document.querySelector(".wind").textContent =`${currentWind} mph`;
    document.querySelector(".humidity").textContent =`${currentHum} %`
    document.querySelector("#icon").setAttribute('src', "https://openweathermap.org/img/wn/"+ data.weather[0].icon +"@2x.png")
}


// TODO: add an event listener that will run the function when the form is submitted

searchForm.addEventListener('submit', captureCity)



