import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SponsorsPercentageRoutingModule } from './sponsors-percentage-routing.module';
import { SponsorsPercentageComponent } from './sponsors-percentage.component';

@NgModule({
  imports: [
    CommonModule,
    SponsorsPercentageRoutingModule
  ],
  declarations: [
    SponsorsPercentageComponent
  ]
})
export class SponsorsPercentageModule { }
