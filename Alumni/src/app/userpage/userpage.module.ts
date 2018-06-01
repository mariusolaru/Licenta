import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserpageRoutingModule } from './userpage-routing.module';
import { TimelineComponent } from './components/timeline/timeline.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserpageComponent } from './userpage.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardModule } from '../layout/dashboard/dashboard.module';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './components/post/post.component';

@NgModule({
  imports: [
    CommonModule,
    UserpageRoutingModule,
    NgbModule.forRoot(),
    NgbDropdownModule.forRoot(),
    NgbModule,
    DashboardModule,
    FormsModule
  ],
  declarations: [
    SidebarComponent,
    HeaderComponent,
    UserpageComponent,
    UserprofileComponent,
    TimelineComponent,
    PostComponent
  ]
})
export class UserpageModule { }
