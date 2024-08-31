// Converts temperature from Fahrenheit to Celsius and rounds to the nearest whole number

export function fahrenheitToCelsius(tempInFarenheit) {
	return (((tempInFarenheit - 32) * 5) / 9).toFixed(0);
}
