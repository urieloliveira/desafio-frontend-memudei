import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function TempMaxMin({ minTemperature, maxTemperature, city }) {
  return (
    <div className="flex justify-between">
      <h2>{city}</h2>
      <p className="mr-4 font-semibold">
        <FontAwesomeIcon className="text-[#ff7f00] mr-1" icon={faArrowDown} />
        {minTemperature}°C
      </p>
      <p className="font-semibold">
        <FontAwesomeIcon className="text-[#ff7f00] mr-1" icon={faArrowUp} />
        {maxTemperature}°C
      </p>
    </div>
  );
}

export default TempMaxMin;
