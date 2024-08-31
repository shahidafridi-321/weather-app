// Retrieves the location input from the search bar, defaults to "London" if empty, and resets the input field

export function getLocation() {
	let newLocation = document.querySelector(".search-bar").value;
	if (newLocation === "") {
		newLocation = "london";
	}
	document.querySelector(".search-bar").value = "";
	return newLocation;
}
