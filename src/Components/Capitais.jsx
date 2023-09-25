import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TempMaxMin from './TempMaxMin';

function Capitais() {
  const [citiesData, setCitiesData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = '4c5a79d32b5a97ddd95679b42c0f0528'; 
    const capitalCities = [
      'Brasília',
      'Rio de Janeiro',
      'São Paulo',
      'Belo Horizonte',
      'Salvador',
      'Curitiba',
      'Porto Alegre',
      'Recife',
      'Fortaleza',
      'Manaus',
      'Belém',
      'Goiânia',
      'Cuiabá',
      'Natal',
      'Florianópolis',
    ];

    const fetchWeatherData = async () => {
      try {
        const weatherData = await Promise.all(
          capitalCities.map(async (cityName) => {
            const response = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?q=${cityName},BR&lang=pt_br&appid=${apiKey}`
            );

            const temperatureInCelsius = response.data.main.temp - 273.15;
            return {
              cityName,
              minTemperature: parseFloat((response.data.main.temp_min - 273.15).toFixed(2)),
              maxTemperature: parseFloat((response.data.main.temp_max - 273.15).toFixed(2)),
              temperature: parseFloat(temperatureInCelsius.toFixed(2)),
            };
          })
        );

        setCitiesData(weatherData);
        setError(null);
      } catch (error) {
        setError('Erro ao carregar os dados das cidades.');
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <h1>Previsão do Tempo para Capitais do Brasil</h1>
      <ul>
        {citiesData.map((city) => (
            <TempMaxMin
            key={city.cityName}
            city={city.cityName}
            minTemperature={city.minTemperature}
            maxTemperature={city.maxTemperature}
            >
            </TempMaxMin>
        ))}
      </ul>
    </div>
  );
}

export default Capitais;
