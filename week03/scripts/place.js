
// Footer

// Current Year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Last Modified Date
document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;




// Static Weather Data

const temperature = 30; // °C
const windSpeed = 8;     // km/h



// Display the static values on the page
document.getElementById("temperature").textContent = temperature;
document.getElementById("windspeed").textContent = windSpeed;




// Wind Chill Function

function calculateWindChill(temp, speed) {
    return (
        13.12 +
        (0.6215 * temp) -
        (11.37 * Math.pow(speed, 0.16)) +
        (0.3965 * temp * Math.pow(speed, 0.16))
    ).toFixed(1);
}



// Display Wind Chill

const windChill = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChill.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    windChill.textContent = "N/A";
}