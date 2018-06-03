import { Component, OnInit, Input } from '@angular/core';
import { UploadFileService } from '../../../service/upload-file.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: any;
  @Input() profilePicture: any;
  imageToShow: any;
  isImageLoading: any;

  user = JSON.parse(localStorage.getItem('currentUser'));

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
    //console.log(this.post);
    this.getImageFromService();
  }

  getImageFromService() {
    this.isImageLoading = true;
    this.uploadService.getFile(this.user.id , this.post.photoAttachedPath).subscribe(data => {
       this.createImageFromBlob(data.body);
       //console.log(data);   
    this.isImageLoading = false; 
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
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
}
