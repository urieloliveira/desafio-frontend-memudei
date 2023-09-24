import React, { useState } from 'react';
import axios from 'axios';
import MeuBotao from './MeuBotao';


function WeatherApp() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = '4c5a79d32b5a97ddd95679b42c0f0528';

  const getWeather = () => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
      .then((response) => {
        const temperatureInCelsius = response.data.main.temp - 273.15;

        setWeatherData({
          name: response.data.name,
          country: response.data.sys.country,
          temperature: parseFloat(temperatureInCelsius.toFixed(2)), // Converter para número de ponto flutuante
          maxTemperature: parseFloat((response.data.main.temp_max - 273.15).toFixed(2)), // Converter para número de ponto flutuante
          minTemperature: parseFloat((response.data.main.temp_min - 273.15).toFixed(2)), // Converter para número de ponto flutuante
          description: response.data.weather[0].description,
        });
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setWeatherData(null);
      });
  };

  return (
    <div class="relative">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          getWeather();
        }}
      >

        <input
          class='bg-white border text-black  px-4 py-2 w-full'
          type="text"
          id="locationInput"
          placeholder='Insira aqui o nome da sua cidade'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <MeuBotao></MeuBotao>
      </form>

      {weatherData && (
        <div id="weatherInfo">
          <p>Location: {weatherData.name}</p>
          <p>Country: {weatherData.country}</p>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Condition: {weatherData.description}</p>
          <p>Max: {weatherData.maxTemperature}°C</p>
          <p>Min: {weatherData.minTemperature}°C</p>
        </div>
      )}

      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default WeatherApp;
