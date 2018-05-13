import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolunteeringMentorRoutingModule } from './volunteering-mentor-routing.module';
import { VolunteeringMentorComponent } from './volunteering-mentor.component';

@NgModule({
  imports: [
    CommonModule,
    VolunteeringMentorRoutingModule
  ],
  declarations: [
    VolunteeringMentorComponent
  ]
})
export class VolunteeringMentorModule { }
