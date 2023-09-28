import WeatherComponent from "./WeatherComponent";

const CapitalsComponent = ({name, minTemp, maxTemp}) => {
    
    return(
        <div>
            <div>
                <p>{minTemp}</p>
            </div>
            <div>
                <p>{maxTemp}</p>
            </div>
            <div>
                <p>{name}</p>
            </div>
        </div>
    )
}

export default CapitalsComponent