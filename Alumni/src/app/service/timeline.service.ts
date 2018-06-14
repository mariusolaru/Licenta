import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post, ReceivedPost } from '../userpage/components/timeline/data-model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TimelineService {

  constructor(private httpClient : HttpClient) { }

  posts: Array<ReceivedPost> = [];

  getAllPostsByUserId(userId : number): Observable<any>{
    return this.httpClient.get(`http://localhost:8080/posts/filter/` + userId);
  }

  deletePost(postId : number) {
    return this.httpClient.delete(`http://localhost:8080/posts/` + postId);
  }

  getCronologyPosts(userId : number): Observable<any> {
    return this.httpClient.get('http://localhost:8080/posts/cronology/' + userId);
  }
}
