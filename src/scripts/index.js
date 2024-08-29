import "normalize.css";
import "../styles/reset.css";
import "../styles/style.css";

let path =
	"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=YOUR_API_KEY ";
let city = "peshawar";
let apiKey = "JXY5BP8S4JSLUGDSRP6793223";
let address = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}`;

function fetchWeatherData(url) {
	return new Promise((resolve, reject) => {
		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						`HTTP Error: ${response.status} - ${response.statusText}`
					);
				}
				return response.json();
			})
			.then((data) => {
				resolve(data.currentConditions);
			})
			.catch((error) => reject(error));
	});
}
/* 
function requiredWeatherData() {
	return fetchWeatherData(address).then((data) => {
		return {
			temp: data.temp,
			feelslike: data.feelslike,
			conditions: data.conditions,
		};
	});
}
requiredWeatherData()
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.error(`Error fetching weather data: ${error}`);
	});
 */