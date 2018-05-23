import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { TimelineService } from '../../../service/timeline.service';
import { Post } from './data-model';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import { UploadFileService } from '../../../service/upload-file.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  animations: [routerTransition()] 
})
export class TimelineComponent implements OnInit {

  posts : Array<Post> = this.timelineService.getAllPostsByUserEmail("email");

  constructor(private timelineService : TimelineService , private uploadService: UploadFileService) { }

  ngOnInit() {
    console.log(this.posts);
  }

  selectedFiles: FileList;
  currentFileUpload: File;
  identityDocument: any;
  progress: { percentage: number } = { percentage: 0 };

  selectFile(event) {
    const file = event.target.files.item(0);
 
    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('Invalid format!');
    }

    console.log("Am ajuns aici: " + file);
  }

  upload() {
    this.progress.percentage = 0;
 
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
 
    this.selectedFiles = undefined;
  }

}
