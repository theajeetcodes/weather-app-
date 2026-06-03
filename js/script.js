const container = document.querySelector(".container");

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

