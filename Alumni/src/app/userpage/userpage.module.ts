import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserpageRoutingModule } from './userpage-routing.module';
import { UserpageComponent } from './userpage.component';

import { TimelineComponent } from './components/timeline/timeline.component';

@NgModule({
  imports: [
    CommonModule,
    UserpageRoutingModule
  ],
  declarations: [
    UserpageComponent,
    TimelineComponent
  ]
})
export class UserpageModule { }
