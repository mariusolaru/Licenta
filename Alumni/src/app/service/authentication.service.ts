import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../layout/graduates-register/data-model';
import { LoginDTO } from '../applogin-navbar/data-model';


@Injectable()
export class AuthenticationService {

  constructor(private httpClient : HttpClient) { }

  login(loginDto : LoginDTO) : any {
    return this.httpClient.post('http://localhost:8080/auth/login' , loginDto);
  }

  logout(){
    localStorage.removeItem('currentUser');
  }

}
