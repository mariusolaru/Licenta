import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutusMissionRoutingModule } from './aboutus-mission-routing.module';
import { AboutusMissionComponent } from './aboutus-mission.component'

@NgModule({
  imports: [
    CommonModule,
    AboutusMissionRoutingModule
  ],
  declarations: [
    AboutusMissionComponent
  ]
})
export class AboutusMissionModule { }
