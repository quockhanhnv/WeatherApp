import { Component, OnInit } from '@angular/core';
import { OpenWeatherApiService } from '../open-weather-api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  querySearch = 'Ha Noi';

  data: any;
  constructor(private openWeatherApiService: OpenWeatherApiService) { }

  ngOnInit() {
    this.openWeatherApiService.weatherDataRespStorage.subscribe(
      (data) => {
        debugger;
        if(data && data.length !== 0) {
          this.data = data[data.length -1].data;
        }
        else {
          this.data = this.openWeatherApiService.searchCity(this.querySearch);
        }
      }
    );
  }

}
