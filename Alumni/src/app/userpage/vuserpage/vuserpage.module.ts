import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VuserpageRoutingModule } from './vuserpage-routing.module';
import { VuserpageComponent } from './vuserpage.component';

@NgModule({
  imports: [
    CommonModule,
    VuserpageRoutingModule
  ],
  declarations: [
    VuserpageComponent
  ]
})
export class VuserpageModule { }
