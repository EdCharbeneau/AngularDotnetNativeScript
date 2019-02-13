import { Component, OnInit } from '@angular/core';
import { WeatherForecast } from '../../sharedLibs/WeatherForecast';
import { WeatherService } from '../../sharedLibs/WeatherService';

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html',
    providers: [WeatherService]
})
export class FetchDataComponent implements OnInit {
    forecasts: WeatherForecast[];
    constructor(private weatherService: WeatherService) { }

    ngOnInit() {
        this.weatherService.getWeather()
            .subscribe((data: WeatherForecast[]) => {
                this.forecasts = data
            });
    }

}