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
  imageToShow: any;
  isImageLoading: any;
  miniImage: any;
  message: string;
  matchingUsers : Array<any>;

  myBlob : any;

  user = JSON.parse(localStorage.getItem('currentUser'));

  constructor(private timelineService : TimelineService , private uploadService: UploadFileService ,
        public sanitizer: DomSanitizer , private data : DataService , private userService : UserService) { }

  ngOnInit() {
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

  createImageFromBlob(image: Blob) {
    //  this.imageToShow = URL.createObjectURL(image);
  
      let reader = new FileReader();
      reader.addEventListener("load", () => {
         this.imageToShow = reader.result;
      }, false);
   
      if (image) {
         reader.readAsDataURL(image);
      }
   }

  upload() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    
    let now = Date.now();

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

}
