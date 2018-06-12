import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article, Eventy } from '../layout/dashboard/data-model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EventService {

  constructor(private httpClient : HttpClient) { }

  insertEvent(eventy : Eventy){
    this.httpClient.post('http://localhost:8080/events' , eventy).
    subscribe((data : any[]) => { console.log(data); })}
  
  getAllEvents() : Observable<any>{
    return this.httpClient.get('http://localhost:8080/events');
  }

  getEventById(id : number) : Observable<any>{
    return this.httpClient.get('http://localhost:8080/events/' + id);
  }
  

}
