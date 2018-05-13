import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraduatesPortraitsRoutingModule } from './graduates-portraits-routing.module';
import { GraduatesPortraitsComponent } from './graduates-portraits.component'

@NgModule({
  imports: [
    CommonModule,
    GraduatesPortraitsRoutingModule
  ],
  declarations: [
    GraduatesPortraitsComponent
  ]
})
export class GraduatesPortraitsModule { }
