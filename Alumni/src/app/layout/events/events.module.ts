import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component'
import { FormsModule } from '@angular/forms';
import { QuillEditorModule } from 'ngx-quill-editor';

@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule,
    QuillEditorModule
  ],
  declarations: [
    EventsComponent
  ]
})
export class EventsModule { }
