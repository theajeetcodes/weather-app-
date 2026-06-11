const container = document.querySelector(".container");
const API_KEY = "d821ae5e423676943d761a7bf0545038";

const heading = document.createElement("h1");
heading.classList.add("head");
heading.textContent = "Weather App";
container.appendChild(heading);

const userInput = document.createElement("input");
userInput.classList.add("input");
userInput.placeholder = "Enter Your City";
container.appendChild(userInput);

const searchBtn = document.createElement("button");
searchBtn.classList.add("search-btn");
searchBtn.textContent = "Search";
container.appendChild(searchBtn);

const weatherBox = document.createElement("div");
weatherBox.classList.add("weather-box");
container.appendChild(weatherBox);

const weatherIcon = document.createElement("img");
weatherIcon.classList.add("weather-icon");
weatherIcon.src = "";
weatherBox.appendChild(weatherIcon);

const temperature = document.createElement("h2");
temperature.classList.add("temperature");
temperature.textContent = "25°C";
weatherBox.appendChild(temperature);

const cityName = document.createElement("h3");
cityName.classList.add("city-name");
cityName.textContent = "Lucknow";
weatherBox.appendChild(cityName);

const weatherCondition = document.createElement("p");
weatherCondition.classList.add("weather-condition");
weatherCondition.textContent = "clear Sky";
weatherBox.appendChild(weatherCondition);

const humidity = document.createElement("p");
humidity.classList.add("humidity");
humidity.textContent = "Humidity: 0%";
weatherBox.appendChild(humidity);

const wind = document.createElement("P");
wind.classList.add("wind");
wind.textContent = "20km/h";
weatherBox.appendChild(wind);

searchBtn.addEventListener("click", async () => {
    const city = userInput.value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        const data = await response.json();
        console.log(data);

        if (data.cod !==200) {
            alert("city not found");
            return;
        }

        cityName.textContent = data.name;
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        weatherCondition.textContent = data.weather[0].description;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        wind.textContent = `wind: ${data.wind.speed} m/s`;

        
    } catch (error) {
        alert("Something went wrong");
        console.log(error);
    }
    
});