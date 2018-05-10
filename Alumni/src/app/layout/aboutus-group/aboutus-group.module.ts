import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutusGroupRoutingModule } from './aboutus-group-routing.module';
import { AboutusGroupComponent } from './aboutus-group.component'

@NgModule({
  imports: [
    CommonModule,
    AboutusGroupRoutingModule
  ],
  declarations: [
    AboutusGroupComponent
  ]
})
export class AboutusGroupModule { }
