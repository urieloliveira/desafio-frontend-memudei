import logo from './logo.svg';
import './App.css';
import lupa from './lupa.jpg';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Previsão do tempo </h1>
        <div className='Cidade'> Aqui vai após a pesquisa </div>
        <div className='Div-search'>
          <input
            type="text"
            placeholder='Insira aqui o nome da cidade'
            className='Input'
          />
          <button className='Button'>
            <img src={logo} alt="Lupa" />
          </button>
        </div>

        <div className="White-line"></div>

        <div className='Capitais'>
          <h2> Capitais </h2>


        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
