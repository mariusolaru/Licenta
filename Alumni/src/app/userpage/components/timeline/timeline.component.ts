import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { TimelineService } from '../../../service/timeline.service';
import { Post, UploadDTO, ReceivedPost } from './data-model';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import { UploadFileService } from '../../../service/upload-file.service';
import { User } from '../../../layout/graduates-register/data-model';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from '../../../service/data.service';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  animations: [routerTransition()] 
})
export class TimelineComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;
  identityDocument: any;
  content: any;
  posts : Array<any>;
  isImageLoading: any;
  miniImage: any;
  message: string;
  matchingUsers : Array<any>;
  profilePicture: any;
  boxProfilePicture: any;

  myBlob : any; 

  user : any;

  constructor(private timelineService : TimelineService , private uploadService: UploadFileService ,
        public sanitizer: DomSanitizer , private data : DataService , private userService : UserService) { }

  ngOnInit() {
     this.delay(1000);
     this.user = JSON.parse(localStorage.getItem('currentUser'));
     this.getProfilePictureFromService();
     this.timelineService.getAllPostsByUserId(this.user.id).subscribe(res => {
       res.reverse();
       this.posts = res;
    });
      this.data.currentMessage.subscribe(message => this.message = message);
      this.data.currentUsers.subscribe(matchingUsers => this.matchingUsers = matchingUsers);
  }

  progress: { percentage: number } = { percentage: 0 };

  selectFile(event) {
    const file = event.target.files.item(0);
 
    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('Invalid format!');
    }
  }

  getProfilePictureFromService() {
    this.isImageLoading = true;
    this.uploadService.getFile(this.user.id , this.user.profilePicturePath).subscribe(data => {
       this.createImageFromBlob(data.body);
       //console.log(data);   
    this.isImageLoading = false; 
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
  }

  getProfilePictureForUserBoxFromService(id : any) {
    this.isImageLoading = true;
    this.uploadService.getFile(id , this.user.profilePicturePath).subscribe(data => {
       this.createImageFromBlobForUserBox(data.body);
       //console.log(data);   
    this.isImageLoading = false; 
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
  }

  createImageFromBlobForUserBox(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.boxProfilePicture = reader.result;
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
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

  upload() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);

    const post : Post = {
      userId : this.user.id,
      photoAttachedPath: "",
      content : this.content
    };

    this.uploadService.addPost(post , this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
 
    this.selectedFiles = undefined;
    this.content = "";
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
 }

  async post(){

    this.upload();

    await this.delay(500);
    console.log("Gata timpu");
    this.currentFileUpload = undefined;
    this.timelineService.getAllPostsByUserId(this.user.id).subscribe(res => {
      res.reverse();
      this.posts = res;
   });

  }

  loadImage(matchingUser : any){
    this.getProfilePictureForUserBoxFromService(matchingUser.id);
  }

}
