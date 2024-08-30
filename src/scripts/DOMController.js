import { requiredWeatherData } from "./required-weather-data";
import { fahrenheitToCelsius } from "./temperatureConversion";

export function displayWeather(location = "london") {
	let mainContentContainer = document.querySelector(".main-content-container");
	mainContentContainer.innerHTML = "";
	document.querySelector(".description").innerHTML = "";

	requiredWeatherData(location)
		.then((data) => {
			mainContentContainer.appendChild(generateWeatherCard(data));
			mainContentContainer.appendChild(generateWeatherDetails(data));
			generateDescription(data);
		})
		.catch((error) => console.error(error));
}

function generateWeatherCard(data) {
	let weatherCard = document.createElement("div");
	weatherCard.classList.add("weather-card");
	weatherCard.innerHTML = `
		<div class="icon">
			<span class="material-symbols-outlined conditions">
					partly_cloudy_day
			</span>
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

function generateDescription(data) {
	document.querySelector(
		".description"
	).innerHTML = `<p>${data.description}</p>`;
}
