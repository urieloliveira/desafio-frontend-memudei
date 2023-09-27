import axios from "axios";
import citiesFile from "../assets/db/cities.json";
import estadosFile from "../assets/db/estados.json";
import {
  City,
  CityWeather,
  Forecast,
  TemperatureData,
  Weather,
} from "../models/models";

import { API_KEY, BASE_URL } from "../utils/requests";

let city_res: City;
let weather_res: Weather;
let forecast: Forecast[];

async function fetchTemperature(city: string): Promise<TemperatureData> {
  try {
    const response = await axios.get(
      `${BASE_URL}weather?q=${city},BR&appid=${API_KEY}&units=metric&lang=pt_br`
    );

    if (response.status === 200) {
      const data = response.data;
      const minTemp = Math.round(parseFloat(data.main.temp_min));
      const maxTemp = Math.round(parseFloat(data.main.temp_max));
      return { min: minTemp, max: maxTemp };
    } else {
      console.error(`Erro ao obter dados para ${city}`);
      throw new Error(`Erro ao obter dados para ${city}`);
    }
  } catch (error) {
    console.error(`Erro ao obter dados para ${city}: ${error}`);
    throw error;
  }
}

export async function getTemperaturesForCapitais(): Promise<{
  [city: string]: TemperatureData;
}> {
  const capitais: string[] = require("../assets/db/capitais.json"); // Carregue a lista de capitais do arquivo JSON

  const temperatures: { [city: string]: TemperatureData } = {};

  for (const city of capitais) {
    try {
      const temperature = await fetchTemperature(city);
      temperatures[city] = temperature;
    } catch (error) {}
  }

  return temperatures;
}

// Função para buscar dados do clima por cidade
export async function getWeatherByCity(city: string): Promise<CityWeather> {
  try {
    const currentWeatherResponse = await axios.get(
      `${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`
    );

    // Obtenha as previsões para os próximos 5 dias
    const forecastResponse = await axios.get(
      `${BASE_URL}forecast?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`
    );

    if (forecastResponse.status === 200) {
      const forecasts = forecastResponse.data.list.filter((forecast: any) =>
        forecast.dt_txt.includes("12:00:00")
      );

      forecast = forecasts.slice(0, 5).map((item: any) => ({
        day: getDayOfWeek(item.dt_txt),
        min: Math.round(parseFloat(item.main.temp_min)),
        max: Math.round(parseFloat(item.main.temp_max)),
      }));
    }

    if (currentWeatherResponse.status === 200) {
      const currentWeatherdata = currentWeatherResponse.data;
      const stateAcronym = await findStateAcronymByCityName(
        currentWeatherdata.name
      );

      city_res = {
        id: currentWeatherdata.id,
        name: currentWeatherdata.name,
        acronym: stateAcronym,
        coord: {
          lon: currentWeatherdata.coord.lon,
          lat: currentWeatherdata.coord.lat,
        },
        timeZone: currentWeatherdata.timezone,
      };

      weather_res = {
        id: currentWeatherdata.weather[0].id,
        description:
          currentWeatherdata.weather[0].description.charAt(0).toUpperCase() +
          currentWeatherdata.weather[0].description.slice(1),
        icon: currentWeatherdata.weather[0].icon,
        temp: Math.round(parseFloat(currentWeatherdata.main.temp)),
        minTemp: Math.round(parseFloat(currentWeatherdata.main.temp_min)),
        maxTemp: Math.round(parseFloat(currentWeatherdata.main.temp_max)),
        feelsLike: Math.round(parseFloat(currentWeatherdata.main.feels_like)),
        humidity: currentWeatherdata.main.humidity,
        wind: {
          speed: metroPorHoraTokm(currentWeatherdata.wind.speed),
          deg: currentWeatherdata.wind.deg,
        },
        forecast: forecast,
      };

      const cityWeather: CityWeather = {
        city: city_res,
        weather: weather_res,
      };

      return cityWeather;
    } else {
      throw new Error(`Erro ao obter dados da semana para ${city}`);
    }
  } catch (error) {
    console.error(`Erro ao obter dados para ${city}: ${error}`);
    throw error;
  }
}

function getDayOfWeek(dateString: string): string {
  const forecastDate = new Date(dateString);
  const daysOfWeek = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const dayOfWeek = daysOfWeek[forecastDate.getDay()];
  return dayOfWeek;
}

function metroPorHoraTokm(velocidade: string): number {
  return Math.round(parseFloat(velocidade));
}

// Função para encontrar a sigla do estado por nome da cidade
async function findStateAcronymByCityName(cityName: string): Promise<string> {
  try {
    const city = citiesFile.find((c) => c.name === cityName);

    if (city) {
      const state = estadosFile.find((s) => s.name === city.subcountry);
      return state?.acronym ?? "NA";
    }

    return "NA"; // Se a cidade não for encontrada
  } catch (error) {
    console.error("Erro ao buscar sigla do estado:", error);
    throw error;
  }
}
