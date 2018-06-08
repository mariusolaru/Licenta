import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../service/user.service';
import { UploadFileService } from '../../service/upload-file.service';
import { TimelineService } from '../../service/timeline.service';
import { routerTransitionLeft } from '../../router.animations';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-vuserpage',
  templateUrl: './vuserpage.component.html',
  styleUrls: ['./vuserpage.component.scss'],
  animations: [routerTransitionLeft()] 
})
export class VuserpageComponent implements OnInit {

  constructor(private route : ActivatedRoute, 
              private userService : UserService,
              private uploadService : UploadFileService,
              private timelineService : TimelineService,
              private data : DataService) { }

  vuser_id : number;
  user : any;
  profilePicture: any;
  isImageLoading: any;
  posts : Array<any>;

  shouldAppear : boolean = false;

  async ngOnInit() {
    
    this.vuser_id = this.route.snapshot.params.id.split(".")[2];
    console.log(this.vuser_id);
    this.userService.getUserById(this.vuser_id).subscribe((user : any[]) => {
      this.user = user;
    })
    await this.delay(600);
    console.log("Userul: " );
    console.log(this.user);
    this.getProfilePictureFromService();
    this.timelineService.getAllPostsByUserId(this.user.id).subscribe(async res => {
      res.reverse();
      this.posts = res;
      await this.delay(600);
   });
    
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
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
