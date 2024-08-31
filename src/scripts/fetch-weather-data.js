/* export function fetchWeatherData(url) {
	return fetch(url).then((response) => {
		if (!response.ok) {
			throw new Error(
				`HTTP Error: ${response.status} - ${response.statusText}`
			);
		}
		return response.json();
	});
}
 */
export async function fetchWeatherData(url) {
	let response = await fetch(url);
	if (!response.ok) {
		throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
	}
	return await response.json();
}
