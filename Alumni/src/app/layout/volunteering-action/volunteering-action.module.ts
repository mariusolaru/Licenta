import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolunteeringActionRoutingModule } from './volunteering-action-routing.module';
import { VolunteeringActionComponent } from './volunteering-action.component';

@NgModule({
  imports: [
    CommonModule,
    VolunteeringActionRoutingModule
  ],
  declarations: [
    VolunteeringActionComponent
  ]
})
export class VolunteeringActionModule { }
