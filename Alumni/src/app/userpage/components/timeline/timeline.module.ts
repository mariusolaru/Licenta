import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineRoutingModule } from './timeline-routing.module';
import { TimelineComponent } from './timeline.component';
import { FormsModule } from '@angular/forms';
import { PostComponent } from '../post/post.component';

@NgModule({
  imports: [
    CommonModule,
    TimelineRoutingModule,
    FormsModule
  ],
  declarations: [
    TimelineComponent,
    PostComponent
  ]
})
export class TimelineModule { }
