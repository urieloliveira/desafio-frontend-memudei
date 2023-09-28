import { useState } from "react"
import SearchBarComponent from './SearchBarComponent'
import axios from "axios";


function WeatherComponent () {
    const [searchedCity, setSearchedCity] = useState('')
    const [exposure, setExposure] = useState(null)
    const [cityData, setCityData] = useState(null)
    const [forecast, setForecast] = useState([]);
    const api_key = 'c68613ef0b5845caec1ea56d2784161f'
    

    function tempConvertion(fahrenheit) {
        let celsius = fahrenheit - 273.15
        return celsius
    }

    const getCityForecast = () => {
        axios
            .get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${searchedCity}&lang=pt_br&appid=${api_key}`
            )
            .then((response) => {
            const forecastData = response.data.list;
            const dailyForecastData = forecastData.filter(
                (item, index) => index % 8 === 0
            );
            const forecast = dailyForecastData.map((item) => {
                const date = new Date(item.dt * 1000); 
                const dayOfWeek = getDayOfWeek(date.getDay()); 
                return {
                dayOfWeek,
                maxTemp: Math.round(tempConvertion(item.main.temp_max)),
                minTemp: Math.round(tempConvertion(item.main.temp_min)),
                };
            });

            setForecast(forecast);
            console.log(forecast);
            })
            .catch((error) => {
            console.log(error);
            });
    };
    
    function getDayOfWeek(dayIndex) {
        const daysOfWeek = [
            "Domingo",
            "Segunda-feira",
            "Terça-feira", 
            "Quarta-feira", 
            "Quinta-feira", 
            "Sexta-feira", 
            "Sábado"
        ];
        return daysOfWeek[(dayIndex + 1) % 7];
    }

    const getCityWeather = () => {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&lang=pt_br&appid=${api_key}`
            )
            .then((response) => {
                setCityData({
                    name: response.data.name,
                    country: response.data.sys.country,
                    temp: Math.round(tempConvertion(response.data.main.temp)),
                    description: response.data.weather[0].description,
                    maxTemp: Math.round(tempConvertion(response.data.main.temp_max)),
                    minTemp: Math.round(tempConvertion(response.data.main.temp_min)),
                    feels: Math.round(tempConvertion(response.data.main.feels_like)),
                    wind: Math.round(response.data.wind.speed),
                    humidity: response.data.main.humidity,

                })
                console.log(cityData)
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            });
    };

    return (
        <div>
          {cityData && exposure &&(
            <>
                <div>
                    <h1>{cityData.name} - {cityData.country}</h1>
                    <h1>{cityData.temp}°C</h1>
                    <h1>{cityData.description.charAt(0).toUpperCase() + cityData.description.slice(1)}</h1>
                    <button onClick={() => setExposure(false)}>
                        fechar
                    </button>
                    <div>
                        <p>{cityData.minTemp}°</p>
                        <p>{cityData.maxTemp}°</p>
                        <p>
                            Vento{" "}
                            <span>{cityData.wind}</span>
                            {" "}
                            km/h
                        </p>
                        <p> 
                            Sensação{" "}
                            <span>{cityData.feels}°</span>
                        </p>
                        <p>
                            Humidade{" "} 
                            <span>{cityData.humidity}</span>
                            %
                        </p>
                    </div>
                    <div>
                        {forecast.map((dayForecast, index) => (
                            <div key={index}>
                                <h2>{dayForecast.dayOfWeek}</h2>
                                <p>min {dayForecast.minTemp}°C</p>
                                <p>max {dayForecast.maxTemp}°C</p>
                            </div>
                        ))}
                    </div>
                </div>   
            </>
          )}
          <div>
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                getCityWeather(searchedCity);
                getCityForecast();
                setExposure(true)
              }}
            >
              <SearchBarComponent
                value={searchedCity}
                onChange={(e) => setSearchedCity(e.target.value)}
              />
            </form>
          </div>
        </div>
    )
}

export default WeatherComponent