import { requiredWeatherData } from "./required-weather-data";
import { fahrenheitToCelsius } from "./temperatureConversion";
import { icons } from "./icons";

// Fetches and displays weather data for the specified location (default: London)

export async function displayWeather(location = "london") {
	try {
		let mainContentContainer = document.querySelector(
			".main-content-container"
		);
		let errorContainer = document.querySelector(".error-handling");
		errorContainer.innerHTML = "";
		document.querySelector(".description").innerHTML = "";
		loadingComponent(mainContentContainer);
		let data = await requiredWeatherData(location);
		mainContentContainer.innerHTML = "";

		mainContentContainer.appendChild(generateWeatherCard(data));
		mainContentContainer.appendChild(generateWeatherDetails(data));
		generateDescription(data);
	} catch (error) {
		errorHandler("make sure you have enter correct location");
	}
}

// Creates a weather card element displaying key weather conditions like temperature, icon, and location

function generateWeatherCard(data) {
	let weatherCard = document.createElement("div");
	weatherCard.classList.add("weather-card");

	weatherCard.innerHTML = `
		<div class="icon-container">
			<img src="${
				icons[data.currentConditions.icon] || icons["default-icon"]
			}" alt="${data.currentConditions.conditions}" class="icon">
		</div>
		<div class="temperature">
			<p class="temp">${fahrenheitToCelsius(data.currentConditions.temperature)}°c
			</p>
			<p class="feels-like">Feels Like ${fahrenheitToCelsius(
				data.currentConditions.feelslike
			)}°c
			</p>
		</div>
		<div class="location-time">
			<p class="location">
				<span class="material-symbols-outlined location-icon">
					location_on
				</span>
				${data.resolvedAddress}
			</p>
			<p class="time">${data.currentConditions.datetime}</p>
		</div>
		`;
	return weatherCard;
}

// Creates and returns an element showing detailed weather conditions such as precipitation, humidity, wind speed, sunrise, and sunset

function generateWeatherDetails(data) {
	let weatherDetails = document.createElement("div");
	weatherDetails.classList.add("weather-details");

	weatherDetails.innerHTML = `
			<p class="weather-detials-item preciption">Chance of Rain: ${data.currentConditions.precipprob}%
			</p>
			<p class="weather-detials-item humidity">Humidity ${data.currentConditions.humidity}%
			</p>
			<p class="weather-detials-item wind">Wind ${data.currentConditions.wind} km/h
			</p>
			<p class="weather-detials-item sunrise">Sunrise ${data.currentConditions.sunrise}
			</p>
			<p class="weather-detials-item sunset">Sunset ${data.currentConditions.sunset}
			</p>
		`;
	return weatherDetails;
}

// Updates the weather description section on the UI

function generateDescription(data) {
	document.querySelector(
		".description"
	).innerHTML = `<p>${data.description}</p>`;
}

// displays messages when fail to retrieve data from API
export function errorHandler(error) {
	let mainContent = document.querySelector(".error-handling");
	mainContent.classList.add("error-message");
	mainContent.innerHTML = `
		<h2>Sorry,SomeThing went wrong</h2>
		<p>please check your internet connection and try again</p>
		<p>${error}</p>
		`;
}

// shows laoding before data has been retrieved
export function loadingComponent(container) {
	container.innerHTML = `
<div id="loading" class="loading-container">
  <div class="spinner"></div>
  <p>Loading...</p>
</div>
	`;
}
