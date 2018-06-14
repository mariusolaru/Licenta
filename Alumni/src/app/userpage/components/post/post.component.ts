import { Component, OnInit, Input } from '@angular/core';
import { UploadFileService } from '../../../service/upload-file.service';
import { TimelineService } from '../../../service/timeline.service';
import { DataService } from '../../../service/data.service';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: any;
  @Input() profilePicture: any;
  @Input() shouldAppear: boolean;
  @Input() vUserId : any;
  imageToShow: any;
  isImageLoading: any;
  displayedPosts: Array<any>; // after deleting
  
  user : any;

  constructor(private uploadService: UploadFileService , private timelineService : TimelineService , private data : DataService
            , private userService : UserService) { }

  async ngOnInit() {
    //console.log(this.post);
    this.userService.getUserById(this.vUserId).subscribe((user : any[]) => {
      this.user = user;
    })
    await this.delay(1000);
    this.getImageFromService();
  }

  getImageFromService() {
    this.isImageLoading = true;
    this.uploadService.getFile(this.user.id , this.post.photoAttachedPath).subscribe(data => {
       this.createImageFromBlob(data.body);
    this.isImageLoading = false; 
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
  }
  createImageFromBlob(image: Blob) {
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

   async delete(postId : any){
     this.timelineService.deletePost(postId).subscribe(res => {
      console.log("Postare setarsa: " + res);
   });

   await this.delay(500);

     this.timelineService.getAllPostsByUserId(this.user.id).subscribe(async res => {
       this.displayedPosts = res;
       this.displayedPosts.sort((a, b) => new Date(b.postingDate).getTime() - new Date(a.postingDate).getTime());
       this.data.changeDisplayedPosts(this.displayedPosts);
      });
     
   }

}
