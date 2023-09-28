import { useState } from "react"
import SearchBarComponent from './SearchBarComponent'
import axios from "axios";


function WeatherComponent () {
    const [searchedCity, setSearchedCity] = useState('')
    const [exposure, setExposure] = useState(null)
    const [cityData, setCityData] = useState(null)
    


    const getCityWeather = () => {
        let api_key = 'c68613ef0b5845caec1ea56d2784161f'
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&lang=pt_br&appid=${api_key}`
            )
            .then((response) => {
                setCityData({
                    name: response.data.name,
                    country: response.data.sys.country,
                    state: response.data.sys.state,
                    temp: response.data.main.temp,
                    maxTemp: response.data.main.temp_max,
                    minTemp: response.data.main.temp_min,
                    description: response.data.weather[0].description,
                    feels: response.data.main.feels_like,
                    wind: response.data.wind.speed,
                    humidity: response.data.main.humidity,

                })
                console.log(cityData)
            })
            .catch((error) => {
                
            });
    };




    return (
        <div>
            <div>
                <h1>Previsao do tempo</h1>
                
            </div>

            <form
                action=""
                onSubmit={(e) => {
                    e.preventDefault()
                    getCityWeather(searchedCity)
                    /*setExpousure(true)*/
                }}
            >
                <SearchBarComponent
                    value={searchedCity}
                    onChange={(e) => setSearchedCity(e.target.value)}
                />
            </form>
        </div>
    )
}

export default WeatherComponent