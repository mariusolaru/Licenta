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

@NgModule({
  imports: [
    CommonModule,
    UserpageRoutingModule,
    NgbModule.forRoot(),
    NgbDropdownModule.forRoot(),
    NgbModule
  ],
  declarations: [
    SidebarComponent,
    HeaderComponent,
    UserpageComponent,
    UserprofileComponent
  ]
})
export class UserpageModule { }
