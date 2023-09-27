import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import CapitaisMinMax from "components/CapitaisMinMax";
import ResultCityWeather from "components/ResultCityWeather";
import { CityWeather } from "models/models";
import { getWeatherByCity } from "../../services/weather_service";

import "./styles.css";

type FormData = {
  city: string;
};

const Home = () => {
  const [formData, setFormData] = useState<FormData>({
    city: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [cityWeather, setCityWeather] = useState<CityWeather>();
  const [isVisible, setVisible] = useState<boolean>(true);

  const handleRemove = () => {
    setVisible(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsLoading(true);
    getWeatherByCity(formData.city)
      .then((data) => {
        setCityWeather(data);
        setFormData({ city: '' });
        
      })
      .finally(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="home-container">
      <div className="home-search-content">
        <h1>Previsão do tempo</h1>
        {cityWeather && (
          <ResultCityWeather
            cityWeather={cityWeather}
            isVisible={isVisible}
            isLoaded={isLoading}
            onRemove={handleRemove}
          />
        )}

        <div className="form-container">
          <div className="input-container">
            <input
              type="text"
              name="city"
              value={formData.city}
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

      {/* <CapitaisMinMax /> */}
    </div>
  );
};

export default Home;
