function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temp");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
}
let apiKey = "c1d63dbb464264ab961e588476c61e78";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Birmingham,UK&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
