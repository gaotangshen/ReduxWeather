import Axios from 'axios';

const API_KEY = 'f21020dac56b24150cac81a3ada96028';
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FEACH_WEATHER = 'FEACH_WEATHER';

export function feachWeather(city) {
  const url = `${API_URL}&q=${city},us`;
  const request = Axios.get(url);

  return {
    type: FEACH_WEATHER,
    payload: request,
  };
}