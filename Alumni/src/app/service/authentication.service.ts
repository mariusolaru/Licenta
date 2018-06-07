import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../layout/graduates-register/data-model';
import { LoginDTO } from '../applogin-navbar/data-model';


@Injectable()
export class AuthenticationService {

  constructor(private httpClient : HttpClient) { }

  login(loginDto : LoginDTO) : any {

    let status : boolean = false;

    this.httpClient.post('http://localhost:8080/auth/login' , loginDto).
    subscribe((user : any[]) => 
    { 
      if (user){
        //console.log(user) ;
        status = true;
        localStorage.setItem('currentUser' , JSON.stringify(user));
      }
    
    })
    return status;
  }

  logout(){
    localStorage.removeItem('currentUser');
  }

}
