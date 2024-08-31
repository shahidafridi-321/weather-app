// Object mapping weather conditions to corresponding icon file paths

import clearDay from "../assets/icons/clear-day.svg";
import clearNight from "../assets/icons/clear-night.svg";
import cloudy from "../assets/icons/cloudy.svg";
import fog from "../assets/icons/fog.svg";
import partlyCloudyDay from "../assets/icons/partly-cloudy-day.svg";
import partlyCloudyNight from "../assets/icons/partly-cloudy-night.svg";
import rain from "../assets/icons/rain.svg";
import snow from "../assets/icons/snow.svg";
import wind from "../assets/icons/wind.svg";

export let icons = {
	snow,
	rain,
	fog,
	wind,
	cloudy,
	"partly-cloudy-day": partlyCloudyDay,
	"partly-cloudy-night": partlyCloudyNight,
	"clear-day": clearDay,
	"clear-night": clearNight,
	"default-icon": clearDay,
};
