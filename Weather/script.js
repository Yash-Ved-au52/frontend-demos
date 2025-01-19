const getWeatherBtn = document.getElementById("getWeatherBtn");
const cityInput = document.getElementById("city");
const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const weather = document.getElementById("weather");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

const apiKey = '38615729b78694e13db73d3b22571f57';  //API key

getWeatherBtn.addEventListener("click", function () {
  const city = cityInput.value;
  if (city) {
    fetch(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`)
      .then(response => response.json())
      .then(data => {
        if (data.success !== false) {
          cityName.textContent = `${data.location.name}, ${data.location.country}`;
          temp.textContent = `Temperature: ${data.current.temperature}°C`;
          weather.textContent = `Weather: ${data.current.weather_descriptions[0]}`;
          humidity.textContent = `Humidity: ${data.current.humidity}%`;
          wind.textContent = `Wind Speed: ${data.current.wind_speed} km/h`;

          // Show the weather display
          document.getElementById("weatherDisplay").style.display = "block";
        } else {
          alert("City not found");
        }
      })
      .catch(error => console.error("Error fetching weather data:", error));
  } else {
    alert("Please enter a city name");
  }
});
