import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolunteeringAsocRoutingModule } from './volunteering-asoc-routing.module';
import { VolunteeringAsocComponent } from './volunteering-asoc.component';

@NgModule({
  imports: [
    CommonModule,
    VolunteeringAsocRoutingModule
  ],
  declarations: [
    VolunteeringAsocComponent
  ]
})
export class VolunteeringAsocModule { }
