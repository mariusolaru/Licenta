import { Injectable } from '@angular/core';
import { Article } from '../layout/dashboard/data-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArticleService {

  constructor(private httpClient : HttpClient) { }

  insertArticle(article : Article){
    this.httpClient.post('http://localhost:8080/articles' , article).
    subscribe((data : any[]) => { console.log(data); })}
  
  getAllArticles() : Observable<any>{
    return this.httpClient.get('http://localhost:8080/articles');
  }

  getArticleById(id : number) : Observable<any>{
    return this.httpClient.get('http://localhost:8080/articles/' + id);
  }
  
}
