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

  getUsersFollowing(id : any) : Observable<any>{
    return this.httpClient.get('http://localhost:8080/users/follows/' + id);
  }

  getFollowingsFollowings(id : any) : Observable<any>{
    return this.httpClient.get('http://localhost:8080/users/followings/' + id);
  }

  getUserById(id : number) : Observable<any>{
    return this.httpClient.get('http://localhost:8080/users/' + id);
  }

  getPasswordById(id : number) : Observable<any>{
    return this.httpClient.get('http://localhost:8080/users/pass/' + id);
  }

  changeUserProperties(userId : any) : any{

    this.httpClient.get('http://localhost:8080/users/' + userId).subscribe((user : any[]) => 
    { 
      if (user){
        localStorage.setItem('currentUser' , JSON.stringify(user));
      }
    
    })
  }

  updateUser(userId: any , userDto : User){

    this.httpClient.put('http://localhost:8080/users/' + userId , userDto).
    subscribe((user : any[]) => 
    { 
      if (user){
        console.log(user);
      }
    
    })
  }

  followUser(userId : any, targetedUserId : any){

    const followDto : any = {
      userId : userId as any,
      followedUserId : targetedUserId as any,
    };

    this.httpClient.put('http://localhost:8080/users/follow', followDto).subscribe((data : any[]) =>{
      console.log(data);
    })
    
  }

  unfollowUser(userId : any, targetedUserId : any){

    const followDto : any = {
      userId : userId as any,
      followedUserId : targetedUserId as any,
    };

    this.httpClient.put('http://localhost:8080/users/unfollow', followDto).subscribe((data : any[]) =>{
      console.log(data);
    })
    
  }

}

  
 
