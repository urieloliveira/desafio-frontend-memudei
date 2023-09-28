import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { ILocationResponse } from '../search-city/search-city.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private appId: string = "004b16ce7e90568f7d7389f273b47e8c"
  private url: string = `https://api.openweathermap.org/data/2.5/weather?`;

  constructor(
    private http: HttpClient,
  ) { }

  public apiGetWeather(local: ILocationResponse): Observable<any> {
    let _url = `${this.url}lat=${local.lat}&lon=${local.long}&appid=${this.appId}&lang=pt_br`;

    return (this.http.get<any>(_url).pipe(
      map(
        res => {
          res.main['feels_like'] = this.kelvinToCeusius(res.main['feels_like']);
          res.main['temp'] = this.kelvinToCeusius(res.main['temp']);
          res.main['temp_max'] = this.kelvinToCeusius(res.main['temp_max']);
          res.main['temp_min'] = this.kelvinToCeusius(res.main['temp_min']);
          return res;
        }
      )
    )
    )
  }

  public kelvinToCeusius(temp: number) {
    return (temp - 273.15);
  }
}
