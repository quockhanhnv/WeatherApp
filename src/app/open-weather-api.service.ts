import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class OpenWeatherApiService {

  // http://api.openweathermap.org/data/2.5/weather?q=HaNoi&APPID=180f734ca78125afb021e7f1d162f4a2
  PREFIX_API_URL = 'http://api.openweathermap.org/data/2.5/weather';
  APP_ID = '180f734ca78125afb021e7f1d162f4a2';

  weatherDataRespStorage = new BehaviorSubject([]); // khai báo ntn để có các phương thức subcribe
  constructor(private httpClient: HttpClient) { }

  searchCity(query: string) {
    const url = `${this.PREFIX_API_URL}?q=${query}&APPID=${this.APP_ID}`;
    this.httpClient.get(url).subscribe(
      (res) => {
        const temp = this.weatherDataRespStorage.value;

        temp.push({key: query, data: res});
        this.weatherDataRespStorage.next(temp);
        console.log(this.weatherDataRespStorage);
        // debugger;
      }
    );
  }
}
