import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VieweventRoutingModule } from './viewevent-routing.module';
import { VieweventComponent } from './viewevent.component';

@NgModule({
  imports: [
    CommonModule,
    VieweventRoutingModule
  ],
  declarations: [
    VieweventComponent
  ]
})
export class VieweventModule { }
