import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OportunitiesRoutingModule } from './oportunities-routing.module';
import { OportunitiesComponent } from './oportunities.component';

@NgModule({
  imports: [
    CommonModule,
    OportunitiesRoutingModule
  ],
  declarations: [
    OportunitiesComponent
  ]
})
export class OportunitiesModule { }
