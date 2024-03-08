import { weather_data } from "./data.js";

let loadDayForecastData = () => {
  let [guayaquil, ambato, tema] = weather_data;

  let {
    city,
    date,
    maxtemperature,
    mintemperature,
    cloudiness,
    wind,
    rainfall,
    ...other
  } = guayaquil;

  let cityHTML = document.getElementById("city");
  cityHTML.innerHTML = city;

  let dateHTML = document.getElementById("date");
  dateHTML.innerHTML = date;

  let maxtemperatureHTML = document.getElementById("maxtemperature");
  maxtemperatureHTML.innerHTML = maxtemperature;

  let mintemperatureHTML = document.getElementById("mintemperature");
  mintemperatureHTML.innerHTML = mintemperature;

  let cloudinessHTML = document.getElementById("cloudiness");
  cloudinessHTML.innerHTML = cloudiness;

  let windHTML = document.getElementById("wind");
  windHTML.innerHTML = wind;

  let rainfallHTML = document.getElementById("rainfall");
  rainfallHTML.innerHTML = rainfall;
};

let loadWeekForecastData = () => {
  let [guayaquil, ambato, tema] = weather_data;
  let { forecast_week } = guayaquil;
  let container = document.getElementById("test");
  container.innerHTML = "";
  forecast_week.forEach((element) => {
    let ItemHTML = document.createElement("li");
    ItemHTML.className =
      "list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg";
    ItemHTML.innerHTML = `
    <div class="d-flex flex-column">
    <h6 class="mb-1 text-dark font-weight-bold text-sm">${element.text}</h6>
    <span class="text-xs">${element.date}</span>
    </div>
    <div class="d-flex align-items-center ">
    <span class="font-weight-bold text-dark mx-2">${element.temperature.max}</span> |  <span class="text-dark mx-2">${element.temperature.min}</span>
    <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${element.icon}</i></div>
    </div>
    `;
    container.appendChild(ItemHTML);
  });
};

loadDayForecastData();
loadWeekForecastData();
