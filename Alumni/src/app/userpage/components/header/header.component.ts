import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { DataService } from '../../../service/data.service';
import { UserService } from '../../../service/user.service';
import { UploadFileService } from '../../../service/upload-file.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [routerTransition()] 
})
export class HeaderComponent implements OnInit {

  user: any;
  
  search : "";
  message : string;
  matchingUsers : Array<any>;
  boxProfilePicture: any;
  isImageLoading: any;
  userFirstName : string;

  @Output() searchEvent = new EventEmitter<string>();
  @Output() usersEvent = new EventEmitter<any>();

  constructor(private data : DataService , private userService : UserService , private uploadService : UploadFileService) { }

  ngOnInit() {
    this.data.currentUser.subscribe(userFirstName => this.userFirstName = userFirstName);
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.data.changeUser(this.userFirstName);
    this.userFirstName = this.user.firstname;
    this.search = "";
    this.message = "";
    this.data.currentMessage.subscribe(message => this.message = message);
    this.data.currentUsers.subscribe(matchingUsers => this.matchingUsers = matchingUsers);
  }

  triggerSearch(event: any) {
    
    this.data.changeMessage(this.search);
    this.searchMatchingUsers();

  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
 }

  searchMatchingUsers(){
    if(this.message == "")
      return;
    this.userService.getMatchingUsers(this.message).subscribe(async res => {
      this.matchingUsers = res;
      for(let entry of this.matchingUsers){
        this.getProfilePictureForUserBoxFromService(entry.id , entry.profilePicturePath);
        await this.delay(300);
        entry.profilePic = this.boxProfilePicture;
      }
      this.data.changeMatchingUsers(this.matchingUsers);
    })
  }

  getProfilePictureForUserBoxFromService(id : any , profilePicturePath : any) {
    this.isImageLoading = true;
    this.uploadService.getFile(id , profilePicturePath).subscribe(data => {
       this.createImageFromBlobForUserBox(data.body);
       //console.log(data);   
    this.isImageLoading = false; 
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
  }

  createImageFromBlobForUserBox(image: Blob) {
    let boxProfilePicture;
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.boxProfilePicture = reader.result;
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
 }

}
