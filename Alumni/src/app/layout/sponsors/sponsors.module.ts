import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SponsorsRoutingModule } from './sponsors-routing.module';
import { SponsorsComponent } from './sponsors.component';

@NgModule({
  imports: [
    CommonModule,
    SponsorsRoutingModule
  ],
  declarations: [
    SponsorsComponent
  ]
})
export class SponsorsModule { }
