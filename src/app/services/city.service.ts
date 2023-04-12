import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from '../models/city';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient: HttpClient) { }
  path = "https://localhost:44335/api/";
  getCities(): Observable<City[]> {
    return this.httpClient.get<City[]>(this.path + "cities")
  }
  getCityById(cityId: Number): Observable<City>{
    return this.httpClient.get<City>(this.path+"cities/detail/?id="+cityId)
  }

  getPhotosByCity(cityId: Number): Observable<Photo[]>{
    return this.httpClient.get<Photo[]>(this.path+ "cities/photos/?cityId="+cityId)
  }
}