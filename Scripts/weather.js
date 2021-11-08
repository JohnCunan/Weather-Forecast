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

        /* DISPLAYS DATA AT THE HTML */

        document.querySelector(".city").innerText = name;
        document.querySelector(".country").innerText = ", " + country;
        document.querySelector(".icon").src = 
        "https://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector(".weather-description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h";
        //document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name +"')";
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
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

weather.fetchWeather("Manila"); //DEFAULT LOCATION
