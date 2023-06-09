import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from '../models/city';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo';
import { AlertifyService } from './alertify.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient: HttpClient,
    private alertifyService: AlertifyService,
    private router: Router) { }
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

  add(city: any){
    this.httpClient.post(this.path + 'cities/add', city).subscribe((data:any)=>{
      this.alertifyService.success("City is added successfully.")
      this.router.navigateByUrl('/cityDetail/' + data["id"])
    });
  }
}
