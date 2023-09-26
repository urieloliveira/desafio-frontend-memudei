import { useState } from "react";
import axios from "axios";
import MeuInput from "./MeuInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function WeatherApp() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [isOpen, setOpen] = useState(true);
  const [forecast, setForecast] = useState(null);

  const apiKey = "4c5a79d32b5a97ddd95679b42c0f0528";

  const getNextFourDays = () => {
    const date = new Date();
    const daysOfWeek = [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ];
    const nextFourDays = [];

    for (let i = 1; i <= 4; i++) {
      const nextDay = new Date(date);
      nextDay.setDate(date.getDate() + i);
      const dayOfWeekIndex = nextDay.getDay();
      nextFourDays.push(daysOfWeek[dayOfWeekIndex]);
    }

    return nextFourDays;
  };

  const getForecast = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&lang=pt_br&appid=${apiKey}`
      )
      .then((response) => {
        if (response.data.list && response.data.list.length >= 4) {
          const forecastData = response.data.list.slice(1, 5).map((item) => ({
            date: item.dt_txt,
            temperature: item.main.temp,
            maxTemperature: parseFloat((item.main.temp_max - 273.15).toFixed()),
            minTemperature: parseFloat((item.main.temp_min - 273.15).toFixed()),
            description: item.weather[0].description,
          }));
          setForecast(forecastData);
          setError(null);
        } else {
          setError(
            "Previsão do tempo não disponível para os próximos quatro dias."
          );
          setForecast(null);
        }
      })
      .catch((error) => {
        setError(error.message);
        setForecast(null);
      });
  };

  const handleOpen = (toggle) => {
    setOpen(toggle);
  };

  

  const getWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=pt_br&appid=${apiKey}`
      )
      .then((response) => {
        const temperatureInCelsius = response.data.main.temp - 273.15;

        setWeatherData({
          name: response.data.name,
          country: response.data.sys.country,
          state: response.data.sys.state,
          temperature: parseFloat(temperatureInCelsius.toFixed()), // Converter para número de ponto flutuante
          maxTemperature: parseFloat(
            (response.data.main.temp_max - 273.15).toFixed()
          ),
          minTemperature: parseFloat(
            (response.data.main.temp_min - 273.15).toFixed()
          ),
          description: response.data.weather[0].description,
          feels: parseFloat((response.data.main.feels_like - 273.15).toFixed()),
          wind: parseFloat((response.data.wind.speed * 3.6).toFixed()),
          humidity: response.data.main.humidity,
        });

        getForecast();
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setWeatherData(null);
      });
  };

  return (
    <div className="md:w-1/2" >
      {isOpen && weatherData && (
        <div className="flex flex-col bg-red-50 text-black w-full inset shadow-lg overflow-hidden mb-0.5 md:mb-0 md:border-b-[#f7af68] md:border-b md:border-solid">
          <div className="flex justify-between mt-3 text-1xl font-semibold ">
            <div className="flex px-10">
              <span>{weatherData.name},</span>{" "}
              <span>{weatherData.country}</span>
            </div>
            <div className="mr-4 text-2xl text-[#ff7f00] leading-tight">
              <button onClick={() => handleOpen(false)}>
                <FontAwesomeIcon icon={faClose} />
              </button>
            </div>
          </div>
          <div></div>
          <div className="flex justify-around mb-4">
            <div className="flex flex-col  justify-between  font-semibold capitalize mt-6 text-start">
              <p className=" text-4xl text-left font-bold">{weatherData.temperature}°C</p>
              <div className="flex justify-between  ">
                <p className="mr-4 ">
                  <FontAwesomeIcon
                    className="text-[#ff7f00] mr-1"
                    icon={faArrowDown}
                  />
                  {weatherData.minTemperature}°C
                </p>
                <p>
                  <FontAwesomeIcon
                    className="text-[#ff7f00] mr-1"
                    icon={faArrowUp}
                  />
                  {weatherData.maxTemperature}°C
                </p>
              </div>
              <div className="flex justify-between  ">
                <p className="text-start font-thin text-gray-600">
                  Vento{" "}
                  <span className="font-semibold text-black">
                    {weatherData.wind} km/h
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col  justify-between  font-semibold capitalize mt-6 text-start">
              <p className="text-4xl whitespace-pre-line w-36 font-bold">{weatherData.description}</p>
              <div className="mt-4">
                <span className="text-start font-thin text-gray-600 ">
                  Sensação{" "}
                  <span className="font-semibold text-black">
                    {weatherData.feels}°
                  </span>
                </span>
              </div>
              <div className="mt-4">
                <span className="text-start font-thin text-gray-600">
                  Humidade{" "}
                  <span className="font-semibold text-black">
                    {weatherData.humidity}%
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      {forecast && isOpen && weatherData &&  (
        <div className="shadow-inner">
          <ul className="flex justify-between px-6 bg-red-50 py-4">
            {getNextFourDays().map((day, index) => (
              <li key={index}>
                <p className="px-2 text-lg text-black text-center font-bold">{day}</p>
                <div>
                  <ul>
                    {forecast
                      .slice(index, index + 1)
                      .map((item, forecastIndex) => (
                        <li className="flex" key={forecastIndex}>
                          <p className="px-2 font-bold text-[#ff7f00]">
                            {item.maxTemperature}°
                          </p>
                          <p className="font-bold text-[#ff7f00]">
                            {item.minTemperature}°
                          </p>
                        </li>
                      ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {error && <p className="text-center text-white text-2xl">Error: {error}</p>}

      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          getWeather();
          setOpen(true);
        }}
      >
        <MeuInput
          placeholder="Insira aqui o nome da sua cidade"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </form>
    </div>
  );
}

export default WeatherApp;
