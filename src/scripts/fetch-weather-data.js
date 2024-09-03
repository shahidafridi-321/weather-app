import { errorHandler } from "./DOMController.js";

// Fetches weather data from the provided API URL and returns the JSON response

export async function fetchWeatherData(url) {
	try {
		let response = await fetch(url);
		if (!response.ok) {
			throw new Error(
				`HTTP Error: ${response.status} - ${response.statusText}`
			);
		}
		return await response.json();
	} catch (error) {
		errorHandler(error);
	}
}
