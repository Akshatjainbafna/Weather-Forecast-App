/**
 * @description
 * Get your openweathermap.org api key and paste it into the .env file.
 * If you don't see an .env file, then rename sample.env to .env
 * and follow the instructions there.
 * @link https://home.openweathermap.org/api_keys
 */
const OPEN_WEATHER_MAP_API_KEY = process.env.REACT_APP_API_KEY;

const config = {
  WEATHER_CURRENT_ENDPOINT: `https://api.openweathermap.org/data/2.5/weather?appid=${OPEN_WEATHER_MAP_API_KEY}&`,
  WEATHER_ONE_CALL_ENDPOINT: `https://api.openweathermap.org/data/2.5/onecall?appid=${OPEN_WEATHER_MAP_API_KEY}&exclude=minutely&units=metric&`,
  WEATHER_5_DAY_FORECAST_ENDPOINT: `https://api.openweathermap.org/data/2.5/forecast?appid=${OPEN_WEATHER_MAP_API_KEY}&units=metric&`
};

export default config;
