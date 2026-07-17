// ==============================
// Footer Dates
// ==============================

// Current Year
const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

// Last Modified Date
document.getElementById("lastModified").textContent =
`Last Modification: ${document.lastModified}`;


// ==============================
// Weather Variables
// (Static values for this assignment)
// ==============================

const temperature = 30; // °C
const windSpeed = 8;     // km/h


// ==============================
// Wind Chill Function
// Metric Formula (°C)
// ==============================

function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}


// ==============================
// Display Wind Chill
// ==============================

const windChill = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChill.textContent =
        `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    windChill.textContent = "N/A";
}