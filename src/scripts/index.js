import "normalize.css";
import "../styles/reset.css";
import "../styles/style.css";

import { getLocation } from "./getNewLocation";
import { displayWeather } from "./DOMController";

displayWeather();

document.querySelector(".search-btn").addEventListener("click", () => {
	displayWeather(getLocation());
});
