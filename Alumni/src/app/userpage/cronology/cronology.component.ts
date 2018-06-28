import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { UserService } from '../../service/user.service';
import { TimelineService } from '../../service/timeline.service';
import { DataService } from '../../service/data.service';
import { UploadFileService } from '../../service/upload-file.service';

@Component({
  selector: 'app-cronology',
  templateUrl: './cronology.component.html',
  styleUrls: ['./cronology.component.scss'],
  animations: [routerTransition()] 
})
export class CronologyComponent implements OnInit {

  public alerts: Array<any> = [];
  public sliders: Array<any> = [];

  constructor(
    private userService : UserService,
    private timelineService : TimelineService,
    private data : DataService,
    private uploadService : UploadFileService) {
      this.sliders.push(
        {
            imagePath: 'assets/images/univ3.jpg',
            label: 'Vezi postări ale întregii comunități Alumni !'
            
        },
         {
            imagePath: 'assets/images/univ.jpg',
            label: 'Vezi postări ale întregii comunități Alumni !'
        }
    );
     }

  posts : Array<any>;
  toBeDisplayedPosts : Array<any>;
  shouldAppear : boolean = false;
  profilePicture: any;
  user_id : number;
  user : any;
  isImageLoading: any;
  imageToShow: any;
  message: string;
  matchingUsers : Array<any>;

  async ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.timelineService.getCronologyPosts(this.user.id).subscribe(async res => {
      this.posts = res;
      this.posts.sort((a, b) => new Date(b.postingDate).getTime() - new Date(a.postingDate).getTime());
   });
   await this.delay(400);
    for(let entry of this.posts) {
      this.getProfilePictureFromService(entry.userId , entry.profilePicturePath);
      await this.delay(300);
      entry.profilePic = this.profilePicture;
      this.getImageFromService(entry.userId , entry.photoAttached);
      await this.delay(300);
      entry.imageToShow = this.imageToShow;
    }

    this.data.changeBeginFlag(false);
    this.data.currentMessage.subscribe(message => this.message = message);
    this.data.currentUsers.subscribe(matchingUsers => this.matchingUsers = matchingUsers);
    this.matchingUsers = [];
    console.log("postari: ");
    console.log(this.posts);
  }

  getProfilePictureFromService(userId : any , userProfPicturePath : any) {
    this.isImageLoading = true;
    this.uploadService.getFile(userId , userProfPicturePath).subscribe(data => {
      this.createImageFromBlob(data.body);
      //console.log(data);   
    this.isImageLoading = false; 
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.profilePicture = reader.result;
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
 }

  getImageFromService(userId : any , postPicturePath : any) {
    this.isImageLoading = true;
    this.uploadService.getFile(userId, postPicturePath).subscribe(data => {
      this.createImageToShowFromBlob(data.body);
    this.isImageLoading = false; 
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
  }
  
  createImageToShowFromBlob(image: Blob) {
      let reader = new FileReader();
      reader.addEventListener("load", () => {
        this.imageToShow = reader.result;
      }, false);
  
      if (image) {
        reader.readAsDataURL(image);
      }
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  async clickedShouldModifySearch(){
    await this.delay(1000);
    this.data.changeMessage(null);
  }

}
