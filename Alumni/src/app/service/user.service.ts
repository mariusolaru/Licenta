import { Injectable } from '@angular/core';
import { User } from '../layout/graduates-register/data-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private httpClient : HttpClient) { }

  insertUser(user : User){
    this.httpClient.post('http://localhost:8080/users' , user).
    subscribe((data : any[]) => { console.log(data); })}


  getMatchingUsers(search : string) : Observable<any>{
    return this.httpClient.get('http://localhost:8080/users/filter/' + search);
  }

  getUserById(id : number) : Observable<any>{
    return this.httpClient.get('http://localhost:8080/users/' + id);
  }

  changeUserProperties(userId : any) : any{

    this.httpClient.get('http://localhost:8080/users/' + userId).subscribe((user : any[]) => 
    { 
      if (user){
        localStorage.setItem('currentUser' , JSON.stringify(user));
      }
    
    })
  }
}

  
 
