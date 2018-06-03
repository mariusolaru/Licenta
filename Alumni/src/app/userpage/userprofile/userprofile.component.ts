import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../../service/upload-file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;
  profilePicture: any;
  isImageLoading: any;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private uploadService : UploadFileService , private userService : UserService) { }

  ngOnInit() {
    this.getProfilePictureFromService();
  }

  user = JSON.parse(localStorage.getItem('currentUser'));

  selectFile(event) {
    const file = event.target.files.item(0);
 
    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('Invalid format!');
    }
    
    this.post();

  }

  upload() {
    console.log("Am ajuns aici");
    this.currentFileUpload = this.selectedFiles.item(0);

    this.uploadService.addProfilePicture(this.user.id , this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
    this.selectedFiles = undefined;
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
 }

  async post(){

    this.upload();

    await this.delay(300);
    this.currentFileUpload = undefined;
    this.userService.changeUserProperties(this.user.id);
    
    await this.delay(500);
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.getProfilePictureFromService();

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
  createImageFromBlob(image: Blob) {
      let reader = new FileReader();
      reader.addEventListener("load", () => {
         this.profilePicture = reader.result;
      }, false);
   
      if (image) {
         reader.readAsDataURL(image);
      }
   }
}
