import { fetchWeatherData } from "./fetch-weather-data.js";

export function requiredWeatherData(location) {
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
