import "normalize.css";
import "../styles/reset.css";
import "../styles/style.css";

let city = "peshawar";
let apiKey = "JXY5BP8S4JSLUGDSRP6793223";
let address = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}`;

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
		return {
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
			},
		};
	});
}
/* requiredWeatherData()
	.then((data) => {
		console.log(data.currentConditions);
	})
	.catch((error) => {
		console.error(`Error fetching weather data: ${error}`);
	});
 */
