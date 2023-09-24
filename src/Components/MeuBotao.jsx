import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; // Importe o ícone de pesquisa

const MeuBotao = () => {
  return (
    <button className="absolute right-0 top-0 mt-2 mr-2 px-1 py-1 bg-white text-black rounded flex items-center justify-center">
      <FontAwesomeIcon icon={faSearch} />
    </button>
  );
};

export default MeuBotao;
