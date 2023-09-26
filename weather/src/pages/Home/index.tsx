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
      </div>

      <CapitaisMinMax />
    </div>
  );
};

export default Home;
