import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudiesRoutingModule } from './studies-routing.module';
import { StudiesComponent } from './studies.component';

@NgModule({
  imports: [
    CommonModule,
    StudiesRoutingModule
  ],
  declarations: [
    StudiesComponent
  ]
})
export class StudiesModule { }
