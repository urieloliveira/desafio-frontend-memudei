import { useState, useEffect } from "react";
import axios from "axios";
import TempMaxMin from "./TempMaxMin";

function Capitais() {
  const [citiesData, setCitiesData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = "4c5a79d32b5a97ddd95679b42c0f0528";
    const capitalCities = [
      "Brasília",
      "Rio de Janeiro",
      "São Paulo",
      "Belo Horizonte",
      "Salvador",
      "Curitiba",
      "Porto Alegre",
      "Recife",
      "Fortaleza",
      "Manaus",
      "Belém",
      "Goiânia",
      "Cuiabá",
      "Natal",
      "Florianópolis",
      "Vitória",
      "João Pessoa",
      "Aracaju",
      "Maceió",
      "Campo Grande",
      "Macapá",
      "Teresina",
      "Porto Velho",
      "Boa Vista",
      "Palmas",
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
              minTemperature: parseFloat(
                (response.data.main.temp_min - 273.15).toFixed()
              ),
              maxTemperature: parseFloat(
                (response.data.main.temp_max - 273.15).toFixed()
              ),
              temperature: parseFloat(temperatureInCelsius.toFixed(2)),
            };
          })
        );

        setCitiesData(weatherData);
        setError(null);
      } catch (error) {
        setError("Erro ao carregar os dados das cidades.");
      }
    };
    fetchWeatherData();
  }, []);

  return (
    <div className="px-10 mt-10 border-t-2 border-t-[#ffe7c7]  border-solid">
      {error && <p>Error: {error}</p>}
      <h1 className="text-white text-start text-5xl mb-5 mt-5 mr-2 font-semibold">Capitais</h1>
      <ul>
        <div className="flex justify-between w-24 font-extralight">
          <li>Min</li>
          <li>Máx</li>
        </div>
        {citiesData.map((city) => (
          <TempMaxMin
            key={city.cityName}
            city={city.cityName}
            minTemperature={city.minTemperature}
            maxTemperature={city.maxTemperature}
          ></TempMaxMin>
        ))}
      </ul>
    </div>
  );
}

export default Capitais;
