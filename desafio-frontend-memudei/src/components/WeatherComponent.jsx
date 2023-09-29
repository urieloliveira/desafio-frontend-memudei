import { useState , useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose , faArrowUp , faArrowDown , faSearch} from '@fortawesome/free-solid-svg-icons';
import SearchBarComponent from './SearchBarComponent'
import axios from "axios";
import CapitalsComponent from "./CapitalsComponent"

function WeatherComponent () {
    const [searchedCity, setSearchedCity] = useState('')
    const [cityData, setCityData] = useState(null)
    const [forecast, setForecast] = useState([])
    const [capitalData, setCapitalData] = useState([])
    const [exposure, setExposure] = useState(null)
    const [statesData, setStatesData] = useState([])
    const statesDataURL = "/estados-cidades.json"
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
                const forecastData = response.data.list
                const dailyForecastData = forecastData.filter(
                (item, index) => index % 8 === 0
            );
            const forecast = dailyForecastData.map((item) => {
                const date = new Date(item.dt * 1000); 
                const dayOfWeek = getDayOfWeek(date.getDay())
                return {
                dayOfWeek,
                maxTemp: Math.round(tempConvertion(item.main.temp_max)),
                minTemp: Math.round(tempConvertion(item.main.temp_min)),
                };
            });

            setForecast(forecast)
            console.log(forecast)
            })
            .catch((error) => {
            console.log(error)
            });
    };
    
    function getDayOfWeek(dayIndex) {
        const daysOfWeek = [
            "Domingo",
            "Segunda",
            "Terça", 
            "Quarta", 
            "Quinta", 
            "Sexta", 
            "Sábado"
        ];
        return daysOfWeek[(dayIndex + 1) % 7]
    }

    /*
    function getCityState(cityName) {
        fetch(statesDataURL) 
        .then((response) => {
            if (!response.ok) {
                throw new Error("Erro ao buscar o arquivo JSON")
            }
            return response.json()
        })
        .then((response) => {
            setStatesData(response)
            console.log(response)
        })
        .catch((error) => {
            console.error(error)
        });
        for (const state of statesData.estados) {
            if (state.cidades.includes(cityName)) {
                console.log(state.sigla)
                return state.sigla
            }
        }
    }*/

    const getCityWeather = () => {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&lang=pt_br&appid=${api_key}`
            )
            .then((response) => {
                setCityData({
                    name: response.data.name,
                    /*state: getCityState(response.data.name),*/
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
            })
    }

    async function generateCapitalData() {
        const capitals = [
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

        const capitalDataPromises = capitals.map(async (capital) => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${capital}&lang=pt_br&appid=${api_key}`
                );
                const { main } = response.data;
                return {
                    name: capital,
                    minTemp: Math.round(tempConvertion(response.data.main.temp_min)),
                    maxTemp: Math.round(tempConvertion(response.data.main.temp_max)),
                };
            } catch (error) {
                console.error(`Erro ao buscar dados: ${error.message}`);
                return null;
            }
        });

        const capitalData = await Promise.all(capitalDataPromises);

        setCapitalData(capitalData);
    }


    useEffect(() => {
        generateCapitalData()
    }, []);
    return (
        <div>
            {cityData && exposure &&(
                <>
                    <div>
                        <div>
                            <p>{cityData.name} - {cityData.country}</p>
                            <h1>{cityData.temp}°C</h1>
                            <h1>{cityData.description.charAt(0).toUpperCase() + cityData.description.slice(1)}</h1>
                            <button  onClick={() => setExposure(false)}>
                                <FontAwesomeIcon icon={faClose} />
                            </button>
                        </div>  
                        <div>
                            <div>
                                <div>
                                    <FontAwesomeIcon icon={faArrowDown} />
                                    <p>{cityData.minTemp}°</p>
                                    <FontAwesomeIcon icon={faArrowUp} />
                                    <p>{cityData.maxTemp}°</p>
                                </div>
                                <div>
                                    <p>
                                        Vento{" "}<span>{cityData.wind}</span>{" "}km/h
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p> 
                                    Sensação{" "}<span>{cityData.feels}°</span>
                                </p>
                                <p>
                                    Humidade{" "} <span>{cityData.humidity}</span>%
                                </p>
                            </div>
                        </div>
                        <div>
                            <ul >
                                {forecast.map((dayForecast, index) => (
                                    <li className="" key={index}>
                                    <p className="">{dayForecast.dayOfWeek}</p>
                                    <p>{dayForecast.minTemp}°C</p>
                                    <p>{dayForecast.maxTemp}°C</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>   
                </>
          )}
            <div>
                <form
                action=""
                onSubmit={(e) => {
                    e.preventDefault()
                    getCityWeather(searchedCity)
                    getCityForecast()
                    setExposure(true)
                }}
                >
                <SearchBarComponent
                    value={searchedCity}
                    onChange={(e) => {
                        setSearchedCity(e.target.value);
                      }}
                />
                </form>
            </div>
            <div>
                <h1>Capitais</h1>
                {capitalData.map((data, index) => (
                <CapitalsComponent
                    key={index}
                    name={data.name}
                    minTemp={data.minTemp}
                    maxTemp={data.maxTemp}
                />
                ))}
            </div>
        </div>
    )
}

export default WeatherComponent