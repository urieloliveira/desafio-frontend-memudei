function TempMaxMin({ minTemperature, maxTemperature, city }) {
  return (
    <div className="flex mt-4 space-x-10 w-48">
      <div className="flex-1">
        <p className="font-bold">{minTemperature}°</p>
      </div>
      <div className="flex-1">
        <p className="font-bold">{maxTemperature}°</p>
      </div>
      <div className="flex-grow">
        <h2 className="text-start whitespace-nowrap font-bold">{city}</h2>
      </div>
    </div>
  );
}

export default TempMaxMin;
