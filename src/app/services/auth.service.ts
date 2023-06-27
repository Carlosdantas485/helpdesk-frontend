import { Injectable } from '@angular/core';
import { Credencials } from '../models/credentials';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //To user that will needed run this comand (npm i @auth0/angular-jwt --save)
  jwtService: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) { }

  authenticate(creds: Credencials){
    return this.http.post(`${API_CONFIG.baseUrl}/login`, creds, {
      observe: 'response',
      responseType: 'text'
    })
  }

  successfullLogin(authToken: string) {
    localStorage.setItem("token", authToken)
  }

  isAuthenticated(){
    let token = localStorage.getItem('token')
    if (token !== null){
      return !this.jwtService.isTokenExpired(token)
    }
    return false
  }

  logout(){
    localStorage.clear()
  }
}
