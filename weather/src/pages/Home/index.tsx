import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faArrowDown,
  faArrowUp,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

import CapitaisMinMax from "components/CapitaisMinMax";

import "./styles.css";

const Home = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("mudou:" + event.target.value);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log("mudou: formulario");
  };
  return (
    <div className="home-container">
      <div className="home-search-content">
        <h1>Previsão do tempo</h1>

        <div className="result-weather-container">
          <div className="home-result-weather-header">
            <p>Niterói, RJ - Brasil </p>
            <button>
              <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
            </button>
          </div>
          <div className="home-result-weather">
            <h1>20°C</h1>
            <h1>Nublado</h1>
          </div>

          <div className="container">
            <div className="coluna">
              <div className="city-weather-esquerda">
                <div className="weather-description">
                  <div className="result-weather">
                    <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>{" "}
                    <p>19°</p>
                  </div>
                  <div className="result-weather">
                    <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>{" "}
                    <p>19°</p>
                  </div>
                </div>
                <div className="weather-description">
                  {" "}
                  <span>Vento </span>
                  <p>18km/h</p>
                </div>
              </div>
            </div>
            <div className="coluna">
              <div className="city-weather-direita">
                <div className="weather-description">
                  {" "}
                  <span>Sensação </span>
                  <p>19°</p>
                </div>
                <div className="weather-description">
                  <span>Humidade </span>
                  <p>89%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="result-forecast-container">
            <div className="bottom-forecast">
              <p>Terça</p>
              <div className="forecast-temps">
                <span>18°</span>
                <span>18°</span>
              </div>
            </div>
            <div className="bottom-forecast">
              <p>Domingo</p>
              <div className="forecast-temps">
                <span>18°</span>
                <span>18°</span>
              </div>
            </div>
            <div className="bottom-forecast">
              <p>Sabado</p>
              <div className="forecast-temps">
                <span>18°</span>
                <span>18°</span>
              </div>
            </div>
            <div className="bottom-forecast">
              <p>Segunda</p>
              <div className="forecast-temps">
                <span>18°</span>
                <span>18°</span>
              </div>
            </div>
            <div className="bottom-forecast forecast-temps-small ">
              <p>Sexta</p>
              <div className="forecast-temps ">
                <span>18°</span>
                <span>18°</span>
              </div>
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="input-container">
            <input
              type="text"
              className="search-input"
              placeholder="Insira aqui o nome da cidade"
              onChange={handleChange}
            />
            <div className="icon" onClick={handleSubmit}>
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        </div>
        <div className="line"></div>
      </div>

      <CapitaisMinMax />
    </div>
  );
};

export default Home;
