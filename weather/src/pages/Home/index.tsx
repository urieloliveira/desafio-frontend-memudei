import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";
import CapitaisMinMax from "components/CapitaisMinMax";

const Home = () => {

  const handleChange  = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("mudou:" +event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("mudou: formulario" )
  }
  return (
    <div className="home-container">
      <div className="home-search-content">
        <h1>Previsão do tempo</h1>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="search-input"
              placeholder="Insira aqui o nome da cidade"
              onChange={handleChange}
            ></input>
            <button type="submit" className="icon-button">
              <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </button>
          </form>
        </div>
      </div>

      <CapitaisMinMax />
    </div>
  );
};

export default Home;
