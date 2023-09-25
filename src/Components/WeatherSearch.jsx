import { useState } from 'react';
import axios from 'axios';
import MeuInput from './MeuInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


function WeatherApp() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [isOpen, setOpen] = useState(true)



  const handleOpen = (toggle) => {
    setOpen(toggle);
  };

  const apiKey = '4c5a79d32b5a97ddd95679b42c0f0528';

  const getWeather = () => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=pt_br&appid=${apiKey}`)
      .then((response) => {

        const temperatureInCelsius = response.data.main.temp - 273.15;


        setWeatherData({
          name: response.data.name,
          country: response.data.sys.country,
          state: response.data.sys.state,
          temperature: parseFloat(temperatureInCelsius.toFixed()), // Converter para número de ponto flutuante
          maxTemperature: parseFloat((response.data.main.temp_max - 273.15).toFixed()), // Converter para número de ponto flutuante
          minTemperature: parseFloat((response.data.main.temp_min - 273.15).toFixed()), // Converter para número de ponto flutuante
          description: response.data.weather[0].description,
          feels: parseFloat((response.data.main.feels_like - 273.15).toFixed()),
          wind: parseFloat((response.data.wind.speed * 3.6).toFixed()),
          humidity: response.data.main.humidity
        });



        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setWeatherData(null);
      });
  };



  return (
    <div>
      {isOpen && weatherData && (

        <div className='flex flex-col bg-red-50 text-black w-full inset shadow-lg overflow-hidden mb-10'>
          <div className='flex justify-between  mt-3 text-1xl font-semibold '>
            <div className='flex px-10'>
              <span>{weatherData.name},</span> <span>{weatherData.country}</span>
            </div>
            <div className='mr-4 text-2xl text-[#ff7f00] leading-tight'>
              <button
                onClick={() => handleOpen(false)}
              >
                <FontAwesomeIcon icon={faClose} />
              </button>
            </div>
          </div>
          <div className='flex justify-around items-center text-4xl font-semibold capitalize mt-6 text-start'>
            <p>{weatherData.temperature}°C</p>
            <p>{weatherData.description}</p>
          </div>
          <div className='flex justify-between mt-6 px-10'>
            <div className='flex justify-between  '>
              <p className='mr-4 font-semibold'><FontAwesomeIcon className='text-[#ff7f00] mr-1' icon={faArrowDown} />{weatherData.minTemperature}°C</p>
              <p className='font-semibold'><FontAwesomeIcon className='text-[#ff7f00] mr-1' icon={faArrowUp} />{weatherData.maxTemperature}°C</p>
            </div>
            <div>
              <span className='text-start font-thin text-gray-600'>Sensação <span className='font-semibold text-black'>{weatherData.feels}°</span></span>
            </div>
          </div>
          <div className='flex justify-between mt-6 px-10'>
            <div className='flex justify-between  '>
              <p className='text-start font-thin text-gray-600'>Vento <span className='font-semibold text-black'>{weatherData.wind} km/h</span></p>
            </div>
            <div className='mb-3'>
              <span className='text-start font-thin text-gray-600'>Humidade <span className='font-semibold text-black'>{weatherData.humidity}°</span></span>
            </div>
          </div>
        </div>
      )}

      {error && <p>Error: {error}</p>}

      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          getWeather();
          setOpen(true)
        }}
      >
        <MeuInput
          placeholder='Insira aqui o nome da sua cidade'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </form>

    </div>
  );
}

export default WeatherApp;
