import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../service/user.service';
import { UploadFileService } from '../../service/upload-file.service';
import { TimelineService } from '../../service/timeline.service';
import { routerTransitionSidebar } from '../../router.animations';

@Component({
  selector: 'app-vuserpageprofile',
  templateUrl: './vuserpageprofile.component.html',
  styleUrls: ['./vuserpageprofile.component.scss'],
  animations: [routerTransitionSidebar()] 
})
export class VuserpageprofileComponent implements OnInit {

  constructor(private route : ActivatedRoute, 
              private userService : UserService,
              private uploadService : UploadFileService,
              private timelineService : TimelineService) { }

  vuser_id : number;
  user : any;
  profilePicture: any;
  isImageLoading: any;
  posts : Array<any>;

  async ngOnInit() {
    this.vuser_id = this.route.snapshot.params.id.split(".")[2];
    this.userService.getUserById(this.vuser_id).subscribe((user : any[]) => {
      this.user = user;
    })
    await this.delay(600);
    this.getProfilePictureFromService();
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
