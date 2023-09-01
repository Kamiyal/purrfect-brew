const apiKey = '05a530dcb0ae114266ed41993ead9893';
const city = 'Tallahassee';  // Replace with your city
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const clouds = data.clouds.all;
    const rain = data.rain;
    document.getElementById('weather').innerHTML = `Quirky Weather Outlook\nTemp: ${temperature}°F\n Humidity: ${humidity}%\n Clouds: ${clouds}%\n Rain: ${rain}`;
  });
