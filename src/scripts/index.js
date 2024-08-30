import "normalize.css";
import "../styles/reset.css";
import "../styles/style.css";

let location = "london";
let apiKey = "JXY5BP8S4JSLUGDSRP6793223";
let address = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`;

function fetchWeatherData(url) {
	return fetch(url).then((response) => {
		if (!response.ok) {
			throw new Error(
				`HTTP Error: ${response.status} - ${response.statusText}`
			);
		}
		return response.json();
	});
}

function requiredWeatherData() {
	return fetchWeatherData(address).then((data) => {
		console.log(data);

		return {
			description: data.days[0].description,
			address: data.address,
			resolvedAddress: data.resolvedAddress,
			currentConditions: {
				temperature: data.currentConditions.temp,
				feelslike: data.currentConditions.feelslike,
				conditions: data.currentConditions.conditions,
				humidity: data.currentConditions.humidity,
				sunrise: data.currentConditions.sunrise,
				sunset: data.currentConditions.sunset,
				datetime: data.currentConditions.datetime,
				precipprob: data.days[0].precipprob,
				wind: data.currentConditions.windspeed,
			},
		};
	});
}

function generateHTML() {
	let mainContentContainer = document.querySelector(".main-content-container");
	mainContentContainer.innerHTML = "";

	document.querySelector(".description").innerHTML = "";

	let weatherCard = document.createElement("div");
	weatherCard.classList.add("weather-card");

	let weatherDetails = document.createElement("div");
	weatherDetails.classList.add("weather-details");
	requiredWeatherData()
		.then((data) => {
			weatherCard.innerHTML = `
		<div class="icon">
			<span class="material-symbols-outlined conditions">
					partly_cloudy_day
			</span>
		</div>
		<div class="temperature">
			<p class="temp">${((data.currentConditions.temperature - 32) * (5 / 9)).toFixed(
				0
			)}°c
			</p>
			<p class="feels-like">Feels Like ${(
				(data.currentConditions.feelslike - 32) *
				(5 / 9)
			).toFixed(0)}°c
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
			weatherDetails.innerHTML = `
			<p class="weather-detials-item 		   	  preciption">Chance of Rain: ${data.currentConditions.precipprob}%
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
			mainContentContainer.appendChild(weatherCard);
			mainContentContainer.appendChild(weatherDetails);
			document.querySelector(
				".description"
			).innerHTML = `<p>${data.description}</p>`;
		})
		.catch((error) => console.error(error));
}

generateHTML();

function getLocation() {
	location = document.querySelector(".search-bar").value;
	if (location === "") {
		location = "london";
	}
	address = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`;
	document.querySelector(".search-bar").value = "";
}

document.querySelector(".search-btn").addEventListener("click", () => {
	getLocation();
	generateHTML();
});
