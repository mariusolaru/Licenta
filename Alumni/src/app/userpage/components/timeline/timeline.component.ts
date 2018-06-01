import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { TimelineService } from '../../../service/timeline.service';
import { Post, UploadDTO, ReceivedPost } from './data-model';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import { UploadFileService } from '../../../service/upload-file.service';
import { User } from '../../../layout/graduates-register/data-model';
import { DomSanitizer } from '@angular/platform-browser';

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

  myBlob : any;

  user = JSON.parse(localStorage.getItem('currentUser'));

  constructor(private timelineService : TimelineService , private uploadService: UploadFileService ,
        public sanitizer: DomSanitizer) { }

  ngOnInit() {
     this.timelineService.getAllPostsByUserId(21).subscribe(res => {
       console.log("Postari:");
       this.posts = res;
       console.log(this.posts);
    });

  //  this.getImageFromService();
  }

  progress: { percentage: number } = { percentage: 0 };

   getImageFromService() {
     this.isImageLoading = true;
     this.uploadService.getFile('marius@email.com_1527346827026.jpg').subscribe(data => {
        this.createImageFromBlob(data.body);
        console.log(data);   
     this.isImageLoading = false; 
     }, error => {
       this.isImageLoading = false;
       console.log(error);
     });
 }

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
  }

  post(){

    this.upload();

  }

}
