import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { DataService } from '../../../service/data.service';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [routerTransition()] 
})
export class HeaderComponent implements OnInit {

  user = JSON.parse(localStorage.getItem('currentUser'));
  
  search : "";
  message : string;
  matchingUsers : Array<any>;

  @Output() searchEvent = new EventEmitter<string>();
  @Output() usersEvent = new EventEmitter<any>();

  constructor(private data : DataService , private userService : UserService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
    this.data.currentUsers.subscribe(matchingUsers => this.matchingUsers = this.matchingUsers);
  }

  triggerSearch(event: any) {
    
    this.data.changeMessage(this.search);
    this.searchMatchingUsers();

  }

  searchMatchingUsers(){
    if(this.message == "")
      return;
    this.userService.getMatchingUsers(this.message).subscribe(res => {
      this.matchingUsers = res;
      this.data.changeMatchingUsers(this.matchingUsers);
    })
  }

}
