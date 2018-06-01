import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { LoginDTO } from './data-model';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'applogin-navbar',
  templateUrl: './applogin-navbar.component.html',
  styleUrls: ['./applogin-navbar.component.scss']
})
export class ApploginNavbarComponent implements OnInit {

  loginForm: FormGroup;
  loginDTO : LoginDTO;

  constructor(private fb: FormBuilder , private authService : AuthenticationService) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.loginForm = this.fb.group({
      email : ['', Validators.required ],
      password : ['', Validators.required ]
      });
  }
  
  checkLogin(){
    const formModel = this.loginForm.value;

    this.loginDTO = {
      email : formModel.email as string,
      password : formModel.password as string,
    }

    this.authService.login(this.loginDTO);

  }

}
