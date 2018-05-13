import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolunteeringRoutingModule } from './volunteering-routing.module';
import { VolunteeringComponent } from './volunteering.component';

@NgModule({
  imports: [
    CommonModule,
    VolunteeringRoutingModule
  ],
  declarations: [
    VolunteeringComponent
  ]
})
export class VolunteeringModule { }
