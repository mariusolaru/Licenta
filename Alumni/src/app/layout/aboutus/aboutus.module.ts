import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutusRoutingModule } from './aboutus-routing.module';
import { AboutusComponent } from './aboutus.component'

@NgModule({
  imports: [
    CommonModule,
    AboutusRoutingModule
  ],
  declarations: [
    AboutusComponent
  ]
})
export class AboutusModule { }
