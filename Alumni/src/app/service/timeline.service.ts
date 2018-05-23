import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../userpage/components/timeline/data-model';

@Injectable()
export class TimelineService {

  constructor(private httpClient : HttpClient) { }

  posts: Array<Post> = [];

  getAllPostsByUserEmail(email : string){
    this.posts = [
      {userPhoto: "../../assets/images/marius_olaru.png" , userFirstName: "Marius" , userLastName: "Olaru" , content : "Lorem ipsum" , photoAttached: "../../assets/images/corpB.jpg" , postingDate: Date.now()},
      {userPhoto: "../../assets/images/marius_olaru.png" , userFirstName: "Marius" , userLastName: "Olaru" , content : "Lorem ipsum" , photoAttached: "../../assets/images/corpB.jpg" , postingDate: Date.now()},
      {userPhoto: "../../assets/images/marius_olaru.png" , userFirstName: "Marius" , userLastName: "Olaru" , content : "Lorem ipsum" , photoAttached: "../../assets/images/corpB.jpg" , postingDate: Date.now()}
    ];

    return this.posts;

  }

}
