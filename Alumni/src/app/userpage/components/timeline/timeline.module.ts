import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineRoutingModule } from './timeline-routing.module';
import { TimelineComponent } from './timeline.component';

@NgModule({
  imports: [
    CommonModule,
    TimelineRoutingModule
  ],
  declarations: [
    TimelineComponent
  ]
})
export class TimelineModule { }
