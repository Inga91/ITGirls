fetch('https://api.openweathermap.org/data/2.5/weather?q=Belgrade&units=metric&appid=2f9bcc0119dc227f139163f2ebd82a00')
    .then(response => response.json())
    .then(weather1 => {
        console.log(weather1.name);
        document.querySelector(".city").innerText = weather1.name;
        document.querySelector(".temp1").innerText = `Temperature = ${Math.round(weather1.main.temp)}°C`;
        document.querySelector(".temp2").innerText = `Feels like: ${Math.round(weather1.main.feels_like)}°C`;
        document.querySelector(".weather").innerText = `${capitalizeFirstLetter(weather1.weather[0].description)}`;
        document.querySelector(".wind").innerText = `Wind speed = ${weather1.wind.speed} m/s`;
    });

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    