import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { UploadFileService } from '../../service/upload-file.service';

@Component({
  selector: 'app-recommandations',
  templateUrl: './recommandations.component.html',
  styleUrls: ['./recommandations.component.scss']
})
export class RecommandationsComponent implements OnInit {

  usersFollowingsFollowings : Array<any>;
  current_user : any;
  isImageLoading: any;
  imageToShow: any;
  profilePicture: any;
  boxProfilePicture: any;
  public alerts: Array<any> = [];
  public sliders: Array<any> = [];

  constructor(private userService : UserService , private uploadService : UploadFileService) { 
    this.sliders.push(
      {
          imagePath: 'assets/images/univ3.jpg',
          label: 'Întâlnește vechi cunoștiințe !',
          text: 'Descoperă alți absolvenți ai UAIC. Poate îi cunoști ...'
      },
      {
        imagePath: 'assets/images/univ.jpg',
        label: 'Întâlnește vechi cunoștiințe !',
        text: 'Descoperă alți absolvenți ai UAIC. Poate îi cunoști ...'
    }
  );
  }

  async ngOnInit() {
    this.current_user = JSON.parse(localStorage.getItem('currentUser'));
    this.userService.getFollowingsFollowings(this.current_user.id).subscribe((data : any[]) => {
      this.usersFollowingsFollowings = data;
    });
    await this.delay(500);
    for(let entry of this.usersFollowingsFollowings){
      this.getProfilePictureForUserBoxFromService(entry.id , entry.profilePicturePath);
      await this.delay(700);
      entry.profilePic = this.boxProfilePicture;
    }
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
 }

 getProfilePictureForUserBoxFromService(id : any , profilePicturePath : any) {
  this.isImageLoading = true;
  this.uploadService.getFile(id , profilePicturePath).subscribe(async data => {
    await this.delay(600);
     this.createImageFromBlobForUserBox(data.body);
     //console.log(data);   
  this.isImageLoading = false; 
  }, error => {
    this.isImageLoading = false;
    console.log(error);
  });
}

createImageFromBlobForUserBox(image: Blob) {
  let boxProfilePicture;
  let reader = new FileReader();
  reader.addEventListener("load", () => {
     this.boxProfilePicture = reader.result;
  }, false);

  if (image) {
     reader.readAsDataURL(image);
  }
}

}
