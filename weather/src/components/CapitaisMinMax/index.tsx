import React, { useEffect, useState } from "react";
import { getTemperaturesForCapitais } from "../../services/weather_service";
import { TemperatureData } from "../../models/models";

import "./styles.css";

const CityWeather = () => {
  const [temperatures, setTemperatures] = useState<{
    [city: string]: TemperatureData;
  }>({});

  useEffect(() => {
    async function fetchTemperatures() {
      try {
        const data = await getTemperaturesForCapitais();
        setTemperatures(data);
      } catch (error) {
        console.error("Erro ao obter as temperaturas:", error);
      }
    }

    fetchTemperatures();
  }, []);
  
  return (
    <div className="home-capitais">
      <h1>Capitais</h1>
      <div className="home-capitais-content">
        <div className="coluna">
          <div className="home-capitais-header">
            <div className="home-capitais-header-letf">
              <p>Min</p>
              <p>Máx</p>
            </div>
            <div className="home-capitais-header-right">
              <p>Min</p>
              <p>Máx</p>
            </div>
          </div>

          
          <div className="capitais">
            {Object.entries(temperatures).map(([city, data]) => (
              <div key={city} className="capital">
                <p>{data.min}°</p>
                <p>{data.max}°</p>
                <p>{city}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityWeather;
