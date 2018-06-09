import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewarticleRoutingModule } from './viewarticle-routing.module';
import { ViewarticleComponent } from './viewarticle.component';

@NgModule({
  imports: [
    CommonModule,
    ViewarticleRoutingModule
  ],
  declarations: [
    ViewarticleComponent
  ]
})
export class ViewarticleModule { }
