document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = lastModified;

    const temperature = 68; // Example static temperature in Fahrenheit
    const windSpeed = 5; // Example static wind speed in mph
    let windChill = 'N/A';

    if (temperature <= 50 && windSpeed > 3) {
        windChill = calculateWindChill(temperature, windSpeed);
    }

    document.getElementById('windchill').textContent = windChill;
});

function calculateWindChill(temp, windSpeed) {
    return (35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16)).toFixed(2);
}
