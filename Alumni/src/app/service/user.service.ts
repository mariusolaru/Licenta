import { Injectable } from '@angular/core';
import { User } from '../layout/graduates-register/data-model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private httpClient : HttpClient) { }

  insertUser(user : User){
    this.httpClient.post('http://localhost:8080/users' , user).
    subscribe((data : any[]) => { console.log(data); })}
}
