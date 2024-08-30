import "normalize.css";
import "../styles/reset.css";
import "../styles/style.css";

import { getLocation } from "./getNewLocation";
import { generateHTML } from "./DOMController";

generateHTML();


document.querySelector(".search-btn").addEventListener("click", () => {
	generateHTML(getLocation());
});
