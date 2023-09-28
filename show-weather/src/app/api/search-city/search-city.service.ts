import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

export interface ILocationResponse {
  lat: string;
  long: string;
}

@Injectable({
  providedIn: 'root'
})
export class SearchCityService {
  private url: string = `https://nominatim.openstreetmap.org/search.php?`;


  constructor(
    private http: HttpClient
  ) { }

  public apiGetCords(cityName: string): Observable<any> {
    let _url = `${this.url}q=${cityName}&format=jsonv2`;
    return this.http.get<any>(_url).pipe(
      map(res => {
        try {
          let local: ILocationResponse = { lat: "", long: "" };

          res = res.find((d: any) => d.type == "city") ?? res[0];
          local.lat = res['lat'];
          local.long = res['lon'];

          return local;
        }
        catch (e) {
          return "erro ao encontrar cidade";
        }
      })
    );
  }
}