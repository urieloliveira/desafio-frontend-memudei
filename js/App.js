import { useEffect } from 'react';
import './App.css';
import pesqButton from './pesqBtn';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import React from 'react';
  

function App() {
    const inputCity = document.querySelector("#inputCity");

    const handleSearch = () => {
      const cidade = inputCity.value;
      console.log(cidade);
  };

  return (
    
  );
}

export default App;
