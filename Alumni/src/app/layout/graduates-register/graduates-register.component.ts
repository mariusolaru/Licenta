import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ViewChild, Input} from "@angular/core";
import {CreateNewAutocompleteGroup, SelectedAutocompleteItem, NgAutocompleteComponent} from "ng-auto-complete";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';

import { User } from './data-model';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-graduates-register',
  templateUrl: './graduates-register.component.html',
  styleUrls: ['./graduates-register.component.scss'],
  animations: [routerTransition()] 
})
export class GraduatesRegisterComponent implements OnInit {

  levelNum: number;
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

  toNumber(){
    this.levelNum = +this.levelNum;
    console.log(this.levelNum);
  }

  //selectedLevel = this.levels[0];

  //selectedLevelCustomCompare = {num: 0, name: "Facultatea de Biolgie"}

  compareFn(a, b) {
    console.log(a, b, a && b && a.num == b.num);
    return a && b && a.num == b.num;
  }

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

  phoneValidator(event: any) {
    if (event.charCode !== 0) {
      const pattern = /[0-9]/;
      const inputChar = String.fromCharCode(event.charCode);

      if (!pattern.test(inputChar)) {
        // invalid character, prevent input
        event.preventDefault();
      }
    }
  }

  regForm: FormGroup;
  user: User;
  graduatedFaculty: any;
  lastStudyType : any;
  activityDomain: any;

  constructor(private fb: FormBuilder , private userService: UserService) {
    this.createForm();
   }

   createForm() {
    this.regForm = this.fb.group({
      firstname: ['', Validators.required ],
      lastname : ['', Validators.required ],
      email : ['', Validators.required ],
      password : ['', Validators.required ],
      birthday : ['', Validators.required ],
      graduationYear : ['' , Validators.required ],
      phoneNumber: ['', Validators.required ],
      gender: ['', Validators.required],
      address: ['', Validators.required ],
      locality: ['', Validators.required ],
      county: ['', Validators.required ],
      zipCode: ['', Validators.required ],
      country: ['', Validators.required ],
      companyName: ['', Validators.required ],
      job: ['', Validators.required ],
      anotherInstitution: ['', Validators.required ]
      });
  }

  prepareSaveUser() : User {
    const formModel = this.regForm.value;

    let ngbDate = this.regForm.controls['birthday'].value;
    let myDate = new Date(ngbDate.year , ngbDate.month - 1 , ngbDate.day);

    const saveUser : User = {
      firstname : formModel.firstname as string,
      lastname : formModel.lastname as string,
      email : formModel.email as string,
      password : formModel.password as string,
      birthday : myDate,
      graduatedFaculty : this.graduatedFaculty.name,
      graduationYear : formModel.graduationYear as number,
      lastStudyType : this.lastStudyType.name,
      phoneNumber: formModel.phoneNumber as string,
      gender: formModel.gender as string,
      address: formModel.address as string,
      locality: formModel.locality as string,
      county: formModel.county as string,
      zipCode: formModel.zipCode as string,
      country: formModel.country as string,
      activityDomain: this.activityDomain.name,
      companyName: formModel.companyName as string,
      job: formModel.job as string,
      anotherInstitution: formModel.anotherInstitution as string,
      profilePicturePath: "",
      facebookUrl: "",
      twitterUrl: "",
      linkedinUrl: "",
      instagramUrl: "",
      profilePic: "",
      userRole: null
    };

    //console.log(saveUser)

    return saveUser;

  }

  submitForm(){
    this.user = this.prepareSaveUser();
    this.userService.insertUser(this.user);

    //this.regForm.reset();
  }

  ngOnInit() {
  }

}
