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

