import axios from "axios";
import config from "../config/config";

async function getCityCoords(city) {
  const response = await axios.get(`${config.WEATHER_CURRENT_ENDPOINT}q=${city}`);
  const {
    coord,
    sys: { country },
  } = response.data;
  return { ...coord, country };
}

async function getCityName(lon, lat) {
  const response = await axios.get(
    `${config.WEATHER_CURRENT_ENDPOINT}lon=${lon}&lat=${lat}`
  );
  const {
    name,
    sys: { country },
  } = response.data;
  return { name, country };
}

async function getWeather(lon, lat) {
  const response = await axios.get(
    `${config.WEATHER_ONE_CALL_ENDPOINT}lon=${lon}&lat=${lat}`
  );
  return response.data;
}

export { getCityCoords, getCityName };
export default getWeather;
