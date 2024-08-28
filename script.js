async function getWeather() {
    const apiKey = '893e36c9a1c77d6a73d554faaade62a5';
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === '404') {
            alert('City not found!');
            return;
        }

        document.getElementById('city-name').innerText = `${data.name}, ${data.sys.country}`;
        document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById('description').innerText = `Weather: ${data.weather[0].description}`;
        document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
        document.getElementById('wind-speed').innerText = `Wind Speed: ${data.wind.speed} m/s`;

        document.querySelector('.weather-info').style.display = 'block';
    } catch (error) {
        alert('Error fetching the weather data. Please try again.');
    }
}
