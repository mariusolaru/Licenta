import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { FormsModule } from '@angular/forms';
import { QuillEditorModule } from 'ngx-quill-editor';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DashboardRoutingModule,
        FormsModule,
        QuillEditorModule
    ],
    declarations: [
        TimelineComponent,
        NotificationComponent,
        ChatComponent,
        DashboardComponent
    ]
})
export class DashboardModule {}
