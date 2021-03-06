let cF = 0, cC = 0;
let isF = false;
let isC = true;

let weather = {

    "apiKey": "28a63d18f2d7e2f6f49374c2827014de",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
            
    },

    displayWeather: function(data) {
        /* EXTRACTS DATA FROM API */
        const { name } = data;
        const { country } = data.sys;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const { lon, lat} = data.coord;

        /* DISPLAYS DATA AT THE HTML */
        let tempFarenheit = ((temp * 1.8) + 32).toFixed(2);
        cF = tempFarenheit, cC= temp;

        document.querySelector(".city").innerText = name;
        document.querySelector(".b-city").innerText = name;
        document.querySelector(".country").innerText = ", " + country;
        document.querySelector(".b-country").innerText = ", " + country;
        document.querySelector(".icon").src = 
        "https://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector(".weather-description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".b-temp").innerText = temp + "°C";
        document.querySelector(".tempf").innerText = tempFarenheit + "°F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h";
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
    convertF: function() {
        document.querySelector(".b-temp").innerText = cF + "°F";
        isF = true;
        isC = false;
    },
    convertC: function() {
        document.querySelector(".b-temp").innerText = cC + "°C";
        isF = false;
        isC = true;
    }
    

};

/* SEARCH FUNCTION */

document
    .querySelector(".btn")
    .addEventListener("click", function() {
        weather.search();
});

document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

/* CONVERT TO F/C FUNCTION */

document
    .querySelector(".convert-btn")
    .addEventListener("click", function() {
        (isF == false) ? weather.convertF() :  weather.convertC();
    })

weather.fetchWeather("Manila"); //DEFAULT LOCATION