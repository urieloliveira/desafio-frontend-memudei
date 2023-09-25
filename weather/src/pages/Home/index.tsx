import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-search-content">
        <h1>Previsão do tempo</h1>
        <div className="form-container">
          <form>
            <input
              type="text"
              className="search-input"
              placeholder="Insira aqui o nome da cidade"
              onChange={() => {}}
            ></input>
            <button className="icon-button">
              <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </button>
          </form>
        </div>
      </div>

      <div className="home-capitais">
        <h1>Capitais</h1>
        <div className="home-capitais-content">
          <div className="coluna">
            <div className="home-capitais-header">
              <div className="home-capitais-header-letf">
                <p>Min</p>
                <p>Máx</p>
              </div>
              <div className="home-capitais-header-right">
                <p>Min</p>
                <p>Máx</p>
              </div>
            </div>
            <div className="capitais">
              <div className="capital">
                <p>18º</p>
                <p>27º</p>
                <p>Rio de Janeiro</p>
              </div>
              <div className="capital">
                <p>18º</p>
                <p>27º</p>
                <p>Salvador</p>
              </div>
              <div className="capital">
                <p>18º</p>
                <p>27º</p>
                <p>São Paulo</p>
              </div>
              <div className="capital">
                <p>18º</p>
                <p>27º</p>
                <p>Manaus</p>
              </div>
              <div className="capital">
                <p>18º</p>
                <p>27º</p>
                <p>Belo Horizonte</p>
              </div>
              <div className="capital">
                <p>18º</p>
                <p>27º</p>
                <p>Curitiba</p>
              </div>
              <div className="capital">
                <p>18º</p>
                <p>27º</p>
                <p>Fortaleza</p>
              </div>
              <div className="capital">
                <p>18º</p>
                <p>27º</p>
                <p>Belém</p>
              </div>
              <div className="capital">
                <p>18º</p>
                <p>27º</p>
                <p>Brasilia</p>
              </div>
              <div className="capital">
                <p>18º</p>
                <p>27º</p>
                <p>João Pessoa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
