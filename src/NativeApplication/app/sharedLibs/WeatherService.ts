import { Injectable } from '@angular/core';
import { WeatherForecast } from './WeatherForecast';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import { Http } from '@angular/http';

const API_URI = 'http://169.254.80.80:55123/api/SampleData/WeatherForecasts';

@Injectable()
export class WeatherService {

    constructor(private http: Http) { }

    getWeather(): Observable<WeatherForecast[]> {
        return this.http
            .get(API_URI).map((response) => response.json());
    }

}