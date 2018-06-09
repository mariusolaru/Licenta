import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../layout/graduates-register/data-model';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject<string>("");
  currentMessage = this.messageSource.asObservable();

  private usersSource = new BehaviorSubject<Array<any>>([]);
  currentUsers = this.usersSource.asObservable();

  private userSource = new BehaviorSubject<string>("");
  currentUser = this.userSource.asObservable();

  private beginFlagSource = new BehaviorSubject<boolean>(true);
  currentBeginFlag = this.beginFlagSource.asObservable();

  private postsSource = new BehaviorSubject<Array<any>>([]);
  currentPosts = this.postsSource.asObservable();

  private shouldAppearSource = new BehaviorSubject<boolean>(false);
  currentShouldAppearFlag = this.shouldAppearSource.asObservable();

  private articlesSource = new BehaviorSubject<Array<any>>([]);
  currentArticles = this.articlesSource.asObservable();


  constructor() { }

  changeMessage(message : string){
    this.messageSource.next(message);
  }

  changeMatchingUsers(users : Array<any>){
    this.usersSource.next(users);
  }

  changeUser(userFirstName : string){
    this.userSource.next(userFirstName);
  }

  changeBeginFlag(flag : boolean){
    this.beginFlagSource.next(flag);
  }

  changeDisplayedPosts(posts : Array<any>){
    this.postsSource.next(posts);
  }

  changeShouldAppearFlag(flag : boolean){
    this.shouldAppearSource.next(flag);
  }

  changeArticles(articles : Array<any>){
    this.articlesSource.next(articles);
  }

}
