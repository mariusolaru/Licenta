import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../layout/graduates-register/data-model';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject<string>("");
  currentMessage = this.messageSource.asObservable();

  private usersSource = new BehaviorSubject<Array<any>>([]);
  currentUsers = this.usersSource.asObservable();

  constructor() { }

  changeMessage(message : string){
    this.messageSource.next(message);
  }

  changeMatchingUsers(users : Array<any>){
    this.usersSource.next(users);
  }

}
