import { Component, OnInit, Inject } from "@angular/core";
import { Http } from '@angular/http';
import { WeatherForecast } from '../../sharedLibs/WeatherForecast';
import { WeatherService } from '../../sharedLibs/WeatherService';

@Component({
    selector: "FetchData",
    moduleId: module.id,
    templateUrl: "./fetchdata.component.html",
    styleUrls: ["./fetchdata.component.css"],
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