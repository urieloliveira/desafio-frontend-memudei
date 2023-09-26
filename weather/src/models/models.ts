export interface CityWeather {
  city: City;
  weather: Weather;
}

export interface City {
  id: number;
  name: string;
  country: string;
  coord: Coord;
  timeZone: string;
}

export interface Weather {
  id: number;
  description: string;
  icon: string;
  temp: number;
  minTemp: number;
  maxTemp: number;
  feelsLike: number;
  humidity: number;
  wind: Wind;
  forecast: Forecast[];
}

export interface Forecast {
  day: string;
  min: number;
  max: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface TemperatureData {
  min: number;
  max: number;
}
