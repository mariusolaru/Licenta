import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsMeetingsRoutingModule } from './events-meetings-routing.module';
import { EventsMeetingsComponent } from './events-meetings.component';

@NgModule({
  imports: [
    CommonModule,
    EventsMeetingsRoutingModule
  ],
  declarations: [
    EventsMeetingsComponent
  ]
})
export class EventsMeetingsModule { }
