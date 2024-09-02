// Importing necessary CSS files and JavaScript modules

import "normalize.css";
import "../styles/reset.css";
import "../styles/style.css";
import "../styles/loading-component.css";

import { getLocation } from "./getNewLocation";
import { displayWeather, loadingComponent } from "./DOMController";

// Fetches and displays weather data for the specified location (default: London)
displayWeather();

// Adds an event listener to the search button to display weather data for the input location

document.querySelector(".search-btn").addEventListener("click", () => {
	loadingComponent(document.querySelector(".main-content-container"));
	displayWeather(getLocation());
});
