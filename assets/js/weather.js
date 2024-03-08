import { weather_data } from "./data.js";

let loadDayForecastData = () => {
  let [guayaquil, ambato, tema] = weather_data;

  let { city, ...other } = guayaquil;
  let cityHTML = document.getElementById("city");
  cityHTML.innerHTML = city;
};

let loadWeekForecastData = () => {};

loadDayForecastData();
loadWeekForecastData();
