export function getLocation() {
	let newLocation = document.querySelector(".search-bar").value;
	if (newLocation === "") {
		newLocation = "london";
	}
	document.querySelector(".search-bar").value = "";
	return newLocation;
}
