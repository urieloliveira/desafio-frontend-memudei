import { Component, OnInit } from '@angular/core';
import { ILocationResponse, SearchCityService } from 'src/app/api/search-city/search-city.service';
import { WeatherService } from 'src/app/api/weather/weather.service';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export interface ICapitalDataResponse {
  name: string;
  data: any;
}

export interface ICapitalsLocationRequest {
  name: string;
  location: ILocationResponse;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  private locationCapitals: ICapitalsLocationRequest[] = [
    {
      name: "Rio Branco",
      location: { lat: "-9.974", long: "-67.8076" },
    },
    {
      name: "Maceió",
      location: { lat: "-9.66625", long: "-35.7351" },
    },
    {
      name: "Macapá",
      location: { lat: "0.0344566", long: "-51.0666" },
    },
    {
      name: "Manaus",
      location: { lat: "-3.10719", long: "-60.0261" },
    },
    {
      name: "Salvador",
      location: { lat: "-12.9704", long: "-12.9704" },
    },
    {
      name: "Fortaleza",
      location: { lat: "-3.71839", long: "-38.5434" },
    },
    {
      name: "Brasília",
      location: { lat: "-15.7801", long: "-47.9292" },
    },
    {
      name: "Vitória",
      location: { lat: "-20.3222", long: "-40.3381" },
    },
    {
      name: "Goiânia",
      location: { lat: "-16.6799", long: "-49.255" },
    },
    {
      name: "São Luís",
      location: { lat: "-2.53073", long: "-44.3068" },
    },
    {
      name: "Cuiabá",
      location: { lat: "-15.5989", long: "-56.0949" },
    },
    {
      name: "Campo Grande",
      location: { lat: "-20.4435", long: "-54.6478" },
    },
    {
      name: "Belo Horizonte",
      location: { lat: "-19.8157", long: "-43.9542" },
    },
    {
      name: "Belém",
      location: { lat: "-1.45502", long: "-48.5024" },
    },
    {
      name: "João Pessoa",
      location: { lat: "-7.11532", long: "-34.861" },
    },
    {
      name: "Curitiba",
      location: { lat: "-25.4284", long: "-49.2733" },
    },
    {
      name: "Recife",
      location: { lat: "-8.05428", long: "-34.8813" },
    },
    {
      name: "Teresina",
      location: { lat: "-5.08921", long: "-42.8016" },
    },
    {
      name: "Rio de Janeiro",
      location: { lat: "-22.9035", long: "-43.2096" },
    },
    {
      name: "Natal",
      location: { lat: "-5.79448", long: "-35.211" },
    },
    {
      name: "Porto Alegre",
      location: { lat: "-30.0277", long: "-51.2287" },
    },
    {
      name: "Porto Velho",
      location: { lat: "-8.76183", long: "-63.902" },
    },
    {
      name: "Boa Vista",
      location: { lat: "2.81954", long: "-60.6714" },
    },
    {
      name: "Florianópolis",
      location: { lat: "-27.5969", long: "-48.5495" },
    },
    {
      name: "São Paulo",
      location: { lat: "-23.5489", long: "-46.6388" },
    },
    {
      name: "Aracaju",
      location: { lat: "-10.9095", long: "-37.0748" },
    },
    {
      name: "Palmas",
      location: { lat: "-10.1689", long: "-48.3317" },
    },
  ]
  public capitals: ICapitalDataResponse[] = [];
  public glassIcon = faMagnifyingGlass;

  constructor(
    private cityService: SearchCityService,
    private weatherService: WeatherService,
  ) { }

  ngOnInit(): void {
    this.fetchCapitalsWeather();
  }

  public fetchCapitalsWeather() {
    this.locationCapitals.map(c => {
      this.weatherService.apiGetWeather(c.location).subscribe(
        res => {
          let capital: ICapitalDataResponse = { name: c.name, data: res };
          this.capitals.push(capital)
        }
      )
    })
  }

  public onApiCall() {
    this.cityService.apiGetCords("niteroi").subscribe(res => {
      this.weatherService.apiGetWeather(res).subscribe(data => console.log(data))
    })

    console.log("cap - ", this.capitals)
  }
}
