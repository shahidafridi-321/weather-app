import { fetchWeatherData } from "./fetch-weather-data.js";

/* export function requiredWeatherData(location) {
	let apiKey = "QC3XC9RCAZP8JNSJGLCVFBUDR";
	let address = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`;

	return fetchWeatherData(address).then((data) => {
		return {
			description: data.days[0].description,
			address: data.address,
			resolvedAddress: data.resolvedAddress,
			currentConditions: {
				temperature: data.currentConditions.temp,
				feelslike: data.currentConditions.feelslike,
				icon: data.currentConditions.icon,
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
} */

// Fetches weather data from the Visual Crossing API for the specified location and returns an object with key weather details

export async function requiredWeatherData(location) {
	let apiKey = "QC3XC9RCAZP8JNSJGLCVFBUDR";
	let address = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`;

	try {
		let data = await fetchWeatherData(address);
		if (!data) {
			throw new Error("Failed To Get data");
		}
		return {
			description: data.days[0].description,
			address: data.address,
			resolvedAddress: data.resolvedAddress,
			currentConditions: {
				temperature: data.currentConditions.temp,
				feelslike: data.currentConditions.feelslike,
				icon: data.currentConditions.icon,
				conditions: data.currentConditions.conditions,
				humidity: data.currentConditions.humidity,
				sunrise: data.currentConditions.sunrise,
				sunset: data.currentConditions.sunset,
				datetime: data.currentConditions.datetime,
				precipprob: data.days[0].precipprob,
				wind: data.currentConditions.windspeed,
			},
		};
	} catch (error) {
		console.log(error);
	}
}
