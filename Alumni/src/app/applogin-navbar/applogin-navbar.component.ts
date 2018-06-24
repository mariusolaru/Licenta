import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { LoginDTO } from './data-model';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'applogin-navbar',
  templateUrl: './applogin-navbar.component.html',
  styleUrls: ['./applogin-navbar.component.scss']
})
export class ApploginNavbarComponent implements OnInit {

  loginForm: FormGroup;
  loginDTO : LoginDTO;

  status : boolean;

  authFailed : boolean = false;

  constructor(private fb: FormBuilder , private authService : AuthenticationService , private router: Router,) {
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

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
 }
  
  async checkLogin(){
    const formModel = this.loginForm.value;

    this.loginDTO = {
      email : formModel.email as string,
      password : formModel.password as string,
    }

    this.authService.login(this.loginDTO).
    subscribe(async (user : any[]) => 
    { 
      if (user){
        //console.log(user) ;
        localStorage.setItem('currentUser' , JSON.stringify(user));
        console.log("Asteptam oleaca");
        await this.delay(500);
        console.log("Gata");
        this.router.navigate(['/home']);
      } else {
        console.log("nu am nimic");
        this.authFailed = true;
      }
    
    })

  }

}
