import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

import { CityWeather } from "models/models";
import ImageLoader from "components/ImageLoader";

import "./styles.css";

type Props = {
  cityWeather: CityWeather;
  isVisible: boolean;
  isLoaded: boolean;
  onRemove: () => void;
};

const ResultCityWeather = ({
  cityWeather,
  isVisible,
  isLoaded,
  onRemove,
}: Props) => {
  if (!isVisible) {
    return null;
  }

  return (
    <>
      {isLoaded ? (
        <div className="result-weather-container">
          <div className="after-loader-container">
            <ImageLoader />
          </div>
        </div>
      ) : (
        <div className="result-weather-container">
          <div className="city-result-weather-header">
            <p>{cityWeather.city.name}, {cityWeather.city.acronym} - Brasil </p>
            <button onClick={onRemove}>
              <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
            </button>
          </div>
          <div className="city-result-weather">
            <h1>{cityWeather.weather.temp}°</h1>
            <h1>{cityWeather.weather.description}</h1>
          </div>

          <div className="container">
            <div className="coluna">
              <div className="city-weather-esquerda">
                <div className="weather-description">
                  <div className="result-weather">
                    <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>{" "}
                    <p>{cityWeather.weather.minTemp}</p>
                  </div>
                  <div className="result-weather">
                    <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>{" "}
                    <p>{cityWeather.weather.maxTemp}</p>
                  </div>
                </div>
                <div className="weather-description">
                  {" "}
                  <span>Vento </span>
                  <p>{cityWeather.weather.wind.speed} km/h</p>
                </div>
              </div>
            </div>
            <div className="coluna">
              <div className="city-weather-direita">
                <div className="weather-description">
                  {" "}
                  <span>Sensação </span>
                  <p>{cityWeather.weather.feelsLike}</p>
                </div>
                <div className="weather-description">
                  <span>Humidade </span>
                  <p>{cityWeather.weather.humidity} %</p>
                </div>
              </div>
            </div>
          </div>
          <div className="result-forecast-container">
            {cityWeather.weather.forecast.map((forecastItem, index) => (
              <div
                className={`bottom-forecast ${
                  index === cityWeather.weather.forecast.length - 1
                    ? "forecast-temps-small"
                    : ""
                }`}
                key={forecastItem.day}
              >
                <p>{forecastItem.day}</p>
                <div className="forecast-temps">
                  <span>{forecastItem.max}°</span>
                  <span>{forecastItem.min}°</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ResultCityWeather;
