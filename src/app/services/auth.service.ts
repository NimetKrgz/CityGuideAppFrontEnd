import { Injectable } from '@angular/core';
import { LoginUser } from '../models/loginUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService, JWT_OPTIONS, JwtInterceptor } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import { RegisterUser } from '../models/registerUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(
  private httpClient: HttpClient,
  private router: Router,
  private alertifyService: AlertifyService
  ) { }

path = "https://localhost:44335/api/auth/";
userToken: any;
decodedToken: any;
jwtHelper: JwtHelperService = new JwtHelperService();
TOKEN_KEY = "token";

login(loginUser: LoginUser){
  let headers = new HttpHeaders();
  headers = headers.append("Content-Type", "application/json")
  this.httpClient.post(this.path + "login", loginUser, {responseType: 'text'}).subscribe((data:any)=>{
    console.log(data);
    this.saveToken(data);
    this.userToken = data;
    this.decodedToken = this.jwtHelper.decodeToken(data);
    console.log(this.decodedToken);
    this.alertifyService.success("Login is successfully completed.");
    this.router.navigateByUrl('/city');
  }, 
  (error: any)=>{
    console.error(error);
    this.alertifyService.error("Login failed.")
  });
}

register(registerUser: RegisterUser){
  let headers = new HttpHeaders();
  headers = headers.append("Content-Type", "application/json")
  this.httpClient.post(this.path + "register", registerUser, {headers:headers}).subscribe((data:any)=>{

  })
}

saveToken(token: any){
  localStorage.setItem(this.TOKEN_KEY, token);
}

logOut(){
  localStorage.removeItem(this.TOKEN_KEY)
  this.alertifyService.success("Logout is successfully completed.");
}

loggedIn(){
  const token = this.token;
  return !this.jwtHelper.isTokenExpired(token);
}

get token(){
  const token = localStorage.getItem(this.TOKEN_KEY);
  return token;
}

getCurrentUserId(){
  return this.jwtHelper.decodeToken(this.userToken).nameid
}
}
