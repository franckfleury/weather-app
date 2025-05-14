const button = document.querySelector("#button");
const input = document.querySelector("input");
const temp = document.querySelector(".temp");
const cityName = document.querySelector(".city");

const checkWeather = async () => {
  const city = input.value;
  const keyApi = `a342fd9e1325587a773d51fbed9b8260`;
  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}`;

  const response = await fetch(url + `&appid=${keyApi}`);
  console.log(response);

  const data = await response.json();
  console.log(data);

  const weatherIcon = document.querySelector("#weatherIcon");
  if (data.main.temp > 26 || data.main.temp <= 40) {
    weatherIcon.src = "images/sunny.png";
  } else if (data.main.temp <= 0 || data.main.temp <= 5) {
    weatherIcon.src = "images/snowflake.png";
  }
  const correctTemp = Math.floor(data.main.temp) + "°C";
  temp.textContent = correctTemp;
  cityName.textContent = data.name;
};

button.addEventListener("click", () => {
  if (input.value == "") {
    alert("Veuillez entré le nom de la ville avant de lancer une recherche");
  } else {
    checkWeather();
  }
});
