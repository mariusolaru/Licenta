import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutusCouncilRoutingModule } from './aboutus-council-routing.module';
import { AboutusCouncilComponent } from './aboutus-council.component'

@NgModule({
  imports: [
    CommonModule,
    AboutusCouncilRoutingModule
  ],
  declarations: [
    AboutusCouncilComponent
  ]
})
export class AboutusCouncilModule { }
