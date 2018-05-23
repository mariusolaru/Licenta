import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraduatesRegisterRoutingModule } from './graduates-register-routing.module';
import { GraduatesRegisterComponent } from './graduates-register.component';
import { FormsModule }   from '@angular/forms';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgAutoCompleteModule } from "ng-auto-complete";
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GraduatesRegisterRoutingModule,
    NgAutoCompleteModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    GraduatesRegisterComponent
  ]
})
export class GraduatesRegisterModule { }
