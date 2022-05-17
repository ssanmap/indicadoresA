import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AllIndicators, Indicator } from '../models/indicators.model';

@Injectable({
  providedIn: 'root'
})
export class IndicadorService {



  apiUrl = environment.apiUrl;
  constructor(private _httpClient: HttpClient) { }

  getDailyIndicators(): Observable<AllIndicators>{
    return this._httpClient.get<AllIndicators>(this.apiUrl);
  }

  getIndicator(name: string): Observable<Indicator>{
    const uri = `${this.apiUrl}/${name}`;
    return this._httpClient.get<Indicator>(uri);
  }

  getIndicatorByDay(name: string, date: string): Observable<Indicator>{
    const uri = `${this.apiUrl}/${name}/${date}`;
    return this._httpClient.get<Indicator>(uri);
  }

  getIndicatorByYear(name: string, year: string): Observable<Indicator>{
    const uri = `${this.apiUrl}/${name}/${year}`;
    return this._httpClient.get<Indicator>(uri);
  }
}
