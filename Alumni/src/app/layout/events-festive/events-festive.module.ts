import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsFestiveRoutingModule } from './events-festive-routing.module';
import { EventsFestiveComponent } from './events-festive.component'

@NgModule({
  imports: [
    CommonModule,
    EventsFestiveRoutingModule
  ],
  declarations: [
    EventsFestiveComponent
  ]
})
export class EventsFestiveModule { }
