import { useEffect } from 'react';
import './App.css';
import pesqButton from './pesqBtn';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import React from 'react';
  

function App() {
    // O código aqui será executado após o carregamento do DOM
    const inputCity = document.querySelector("#inputCity");

    const handleSearch = () => {
      const cidade = inputCity.value;
      console.log(cidade);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Previsão do tempo </h1>

        <div id='data-Weather' className='data-Weather'>
          <span id='local'> Cidade, estado -  pais </span>
          <p id='temperatura'> Graus Celsius <span id='condicao-Tempo'></span></p>
          <div id='infos'>
            <AiOutlineArrowDown /><span id='temp-Min'>18 &deg;C </span>
            <span id='temp-Max'> 24 &deg;C</span><AiOutlineArrowUp />.
            <span id='sensacao'> sencacao <p id='temp-Sens'>19&deg;C</p></span>
            <span id='wind'> Vento <p id='wind-Speed'>23km/h</p></span>
            <span id='humidade'> Humidade <p id='humidade-Ar'> 90% </p></span>
            <div className="orange-line"></div>
          </div>
          <footer>
            <div className='dia-Sem' id='dia-sem'>
              <div>Segunda 
                <span id='temp-Min'>18 &deg;C</span>
                <span id='temp-Max'> 24 &deg;C</span>
              </div>
              <div>Segunda 
                <span id='temp-Min'>18 &deg;C</span>
                <span id='temp-Max'> 24 &deg;C</span>
              </div>
              <div>Segunda 
                <span id='temp-Min'>18 &deg;C</span>
                <span id='temp-Max'> 24 </span>
              </div>
              <div>Segunda 
                <span id='temp-Min'>18 </span>
                <span id='temp-Max'> 24 </span>
              </div>
              <div>Segunda 
                <span id='temp-Min'>18 </span>
                <span id='temp-Max'> 24 </span>
              </div>
            </div>
          </footer>

        </div>

        <div className='Div-search' id='Search'>

          <input type="text" placeholder='Insira aqui o nome da cidade' className='Input' id='inputCity'/>
          <pesqButton onClick={handleSearch}/>
          

        </div>

        <div className="White-line"></div>

        <div className='Capitais'>
          <h2> Capitais </h2>


        </div>

      </header>
    </div>
  );
}

export default App;
