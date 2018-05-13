import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraduatesRoutingModule } from './graduates-routing.module';
import { GraduatesComponent } from './graduates.component'

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import 'hammerjs';
import 'mousetrap';

import { ModalGalleryModule } from 'angular-modal-gallery'; // 

@NgModule({
  imports: [
    CommonModule,
    GraduatesRoutingModule,
    FormsModule,
    ModalGalleryModule
  ],
  declarations: [
    GraduatesComponent
  ]
})
export class GraduatesModule { }
