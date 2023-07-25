document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "413be292bd066027adc528bb4dd5094e";
    const city = "Cape Town";
    const displayElement = document.querySelector("#weather-info");

    const fetchWeatherData = async () => {
        try {
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric');
            const data = await response.json();

            const weatherDirection = data.weather[0].description;
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            const weatherInfoHtml = `
            <strong>Weather Description:</strong> ${weatherDescription} <br>
            <strong>Temperature:</strong> ${temperature} &#8451; <br>
            <strong>Humidity:</strong> ${humidity}% <br>
            <strong></strong> ${windSpeed} m/s
            `;

            displayElement.innerHTML = weatherInfoHtml;
        } catch (error) {
            console.error("Problem occurred when fetching your data:", error);
            weatherInfoHtml.textContent = "We experienced a problem while fetching your data";
        }

        fetchWeatherData();
    }
})