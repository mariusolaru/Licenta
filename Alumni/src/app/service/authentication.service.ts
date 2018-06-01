import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../layout/graduates-register/data-model';
import { LoginDTO } from '../applogin-navbar/data-model';


@Injectable()
export class AuthenticationService {

  constructor(private httpClient : HttpClient) { }

  login(loginDto : LoginDTO){

    this.httpClient.post('http://localhost:8080/auth/login' , loginDto).
    subscribe((user : any[]) => 
    { 
      if (user){
        //console.log(user) ;
        localStorage.setItem('currentUser' , JSON.stringify(user));
      }
    
    })

  }

  logout(){
    localStorage.removeItem('currentUser');
  }

}
