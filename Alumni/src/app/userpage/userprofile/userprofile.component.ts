import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../../service/upload-file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { UserService } from '../../service/user.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../layout/graduates-register/data-model';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {

  user: any;

  userFirstName : string;

  selectedFiles: FileList;
  currentFileUpload: File;
  profilePicture: any;
  isImageLoading: any;
  progress: { percentage: number } = { percentage: 0 };
  activityDomain: any;
  graduatedFaculty: any;
  lastStudyType : any;
  firstname : any;
  lastname : any;
  job : any;
  graduationYear : any;
  locality : any;
  county : any;
  country : any;
  email : any;
  facebookUrl : any;
  twitterUrl : any;
  linkedinUrl : any;
  instagramUrl : any;
  succesMsg : string;

  constructor(private uploadService : UploadFileService , private userService : UserService , private modalService: NgbModal ,
              private data : DataService) { }

  async ngOnInit() {
    this.data.currentUser.subscribe(userFirstName => this.userFirstName = userFirstName);
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.userFirstName = this.user.firstname;
    await this.delay(200);
    this.getProfilePictureFromService();
  }

  

  selectFile(event) {
    const file = event.target.files.item(0);
 
    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('Invalid format!');
    }
    
    this.post();

  }

  async upload() {
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
    await this.delay(1000);
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    await this.delay(500);
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

   closeResult: string;

    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }

    domains: Array<Object> = [
      {idx: 0, name: "Administrație"},
      {idx: 1, name: "Agricultură"},
      {idx: 2, name: "Auto"},
      {idx: 3, name: "Birotică și mobilier"},
      {idx: 4, name: "Construcții"},
      {idx: 5, name: "Consultanță"},
      {idx: 6, name: "Divertisment"},
      {idx: 7, name: "Finanțe - Asigurări"},
      {idx: 8, name: "Imobiliare"},
      {idx: 9, name: "Industrie"},
      {idx: 10, name: "IT, telecomunicații"},
      {idx: 11, name: "Îngrijire personală"},
      {idx: 12, name: "Media"},
      {idx: 13, name: "Modă"},
      {idx: 14, name: "Publicitate"},
      {idx: 15, name: "Sănătate și medicină"},
      {idx: 16, name: "Securitate și protecție"},
      {idx: 17, name: "Servicii persoane"},
      {idx: 18, name: "Servicii profesionale"},
      {idx: 19, name: "Transport"},
      {idx: 20, name: "Turism"},
      {idx: 21, name: "Altele"}
    ]

    levels: Array<Object> = [
      {num: 0, name: "Facultatea de Biologie"},
      {num: 1, name: "Facultatea de Chimie"},
      {num: 2, name: "Facultatea de Drept"},
      {num: 3, name: "Facultatea de Economie si Administrarea Afacerilor"},
      {num: 4, name: "Facultatea de Educatie Fizica si Sport"},
      {num: 5, name: "Facultatea de Filosofie si Stiinte Social-Politice"},
      {num: 6, name: "Facultatea de Fizica"},
      {num: 7, name: "Facultatea de Geografie si Geologie"},
      {num: 8, name: "Facultatea de Informatica"},
      {num: 9, name: "Facultatea de Istorie"},
      {num: 10, name: "Facultatea de Litere"},
      {num: 11, name: "Facultatea de Matematica"},
      {num: 12, name: "Facultatea de Psihologie si Stiinte ale Educatiei"},
      {num: 13, name: "Facultatea de Teologie Ortodoxa"},
      {num: 14, name: "Facultatea de Teologie Romano-Catolica"},
      {num: 15, name: "Centrul de Studii Europene"}
  ];

  learningtypes: Array<Object> = [
    {numbr: 0, name: "Licenta"},
    {numbr: 1, name: "Master"},
    {numbr: 2, name: "Doctorat"},
    {numbr: 3, name: "Studii postdoctorale"}
  ]

  yearValidator(event: any) {
    if (event.charCode !== 0) {
      const pattern = /[0-9]/;
      const inputChar = String.fromCharCode(event.charCode);

      if (!pattern.test(inputChar)) {
        // invalid character, prevent input
        event.preventDefault();
      }
    }
  }

  async saveModifs(){

    const updateUser : User = {
      firstname : this.firstname as string,
      lastname : this.lastname as string,
      email : this.email as string,
      password : null,
      birthday : null,
      graduatedFaculty : (this.graduatedFaculty != undefined ? this.graduatedFaculty.name : null),
      graduationYear : this.graduationYear as number,
      lastStudyType : (this.lastStudyType != undefined ? this.lastStudyType.name : null),
      phoneNumber: null,
      gender: null,
      address: null,
      locality: this.locality as string,
      county: this.county as string,
      zipCode: null,
      country: this.country as string,
      activityDomain: (this.activityDomain != undefined ? this.activityDomain.name : null),
      companyName: null,
      job: this.job as string,
      anotherInstitution: null,
      profilePicturePath: null,
      facebookUrl: this.facebookUrl as string,
      twitterUrl: this.twitterUrl as string,
      linkedinUrl: this.linkedinUrl as string,
      instagramUrl: this.instagramUrl as string,
      profilePic: null,
      userRole: null
    };
    
    this.activityDomain = null;
    this.graduatedFaculty = null;
    this.lastStudyType = null;
    this.firstname = null;
    this.lastname = null;
    this.job = null;
    this.graduationYear = null;
    this.locality = null;
    this.county = null;
    this.country = null;
    this.email = null;
    this.facebookUrl = null;
    this.twitterUrl = null;
    this.linkedinUrl = null;
    this.instagramUrl = null;

    this.userService.updateUser(this.user.id , updateUser);

    await this.delay(1000);

    this.userService.changeUserProperties(this.user.id);

    await this.delay(500);

    this.user = JSON.parse(localStorage.getItem('currentUser'));

    this.data.changeUser(this.user.firstname);

  }

  currentPass: string;
  newPass: string;
  confirmPass: string;

  currPass: any;

  backMsg: string;

  async changePass(){
    this.backMsg = null;
    if(this.currentPass == null || this.currentPass == undefined){
      this.backMsg = "Nu puteti lasa campuri necompletate";
      return;
    }
    if(this.newPass == null || this.newPass == undefined){
      this.backMsg = "Nu puteti lasa campuri necompletate";
      return;
    }
    if(this.confirmPass == null || this.confirmPass == undefined){
      this.backMsg = "Nu puteti lasa campuri necompletate";
      return;
    }

    this.userService.getPasswordById(this.user.id).subscribe(async res =>{
      this.currPass = res;
      await this.delay(1000);
    });
    await this.delay(1000);

    if(this.currentPass != this.currPass.password){
      console.log(this.currentPass);
      console.log(this.currPass.password);
      this.backMsg = "Parola actuala introdusa este gresita";
      return;
    }

    if(this.newPass != this.confirmPass){
      this.backMsg = "Campurile noii parole sunt completate diferit";
      return;
    }

    const updateUser : User = {
      firstname : null,
      lastname : null,
      email : null,
      password : this.newPass,
      birthday : null,
      graduatedFaculty : null,
      graduationYear : null,
      lastStudyType : null,
      phoneNumber: null,
      gender: null,
      address: null,
      locality: null,
      county: null,
      zipCode: null,
      country: null,
      activityDomain: null,
      companyName: null,
      job: null,
      anotherInstitution: null,
      profilePicturePath: null,
      facebookUrl: null,
      twitterUrl: null,
      linkedinUrl: null,
      instagramUrl: null,
      profilePic: null,
      userRole: null
    };

    this.currentPass = null;
    this.newPass = null;
    this.confirmPass = null;

    this.userService.updateUser(this.user.id , updateUser);
    this.backMsg = "";
    this.succesMsg = "Ati adaugat un nou articol cu succes";
    await this.delay(3000);
    this.succesMsg = null;

    this.userService.changeUserProperties(this.user.id);

    await this.delay(500);
  }

}
