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
import { VuserpageComponent } from './vuserpage/vuserpage.component';
import { VuserpageprofileComponent } from './vuserpageprofile/vuserpageprofile.component';
import { AboutusMissionModule } from '../layout/aboutus-mission/aboutus-mission.module';
import { AboutusModule } from '../layout/aboutus/aboutus.module';
import { AboutusCouncilModule } from '../layout/aboutus-council/aboutus-council.module';
import { AboutusGroupModule } from '../layout/aboutus-group/aboutus-group.module';
import { EventsModule } from '../layout/events/events.module';
import { EventsFestiveModule } from '../layout/events-festive/events-festive.module';
import { EventsMeetingsModule } from '../layout/events-meetings/events-meetings.module';
import { EventsPartnershipModule } from '../layout/events-partnership/events-partnership.module';
import { ProjectsModule } from '../layout/projects/projects.module';
import { GraduatesModule } from '../layout/graduates/graduates.module';
import { GraduatesPortraitsModule } from '../layout/graduates-portraits/graduates-portraits.module';
import { GraduatesRegisterModule } from '../layout/graduates-register/graduates-register.module';
import { VolunteeringModule } from '../layout/volunteering/volunteering.module';
import { VolunteeringActionModule } from '../layout/volunteering-action/volunteering-action.module';
import { VolunteeringAsocModule } from '../layout/volunteering-asoc/volunteering-asoc.module';
import { VolunteeringMentorModule } from '../layout/volunteering-mentor/volunteering-mentor.module';
import { OportunitiesModule } from '../layout/oportunities/oportunities.module';
import { SponsorsModule } from '../layout/sponsors/sponsors.module';
import { SponsorsPercentageModule } from '../layout/sponsors-percentage/sponsors-percentage.module';
import { StudiesModule } from '../layout/studies/studies.module';
import { CronologyComponent } from './cronology/cronology.component';
import { CronologypostComponent } from './components/cronologypost/cronologypost.component';
import { FollowspostsComponent } from './followsposts/followsposts.component';

@NgModule({
  imports: [
    CommonModule,
    UserpageRoutingModule,
    NgbModule.forRoot(),
    NgbDropdownModule.forRoot(),
    NgbModule,
    DashboardModule,
    FormsModule,
    AboutusMissionModule,
    AboutusModule,
    AboutusCouncilModule,
    AboutusGroupModule,
    EventsModule,
    EventsFestiveModule,
    EventsMeetingsModule,
    EventsPartnershipModule,
    ProjectsModule,
    GraduatesModule,
    GraduatesPortraitsModule,
    GraduatesRegisterModule,
    VolunteeringModule,
    VolunteeringActionModule,
    VolunteeringAsocModule,
    VolunteeringMentorModule,
    OportunitiesModule,
    SponsorsModule,
    SponsorsPercentageModule,
    StudiesModule
  ],
  declarations: [
    SidebarComponent,
    HeaderComponent,
    UserpageComponent,
    UserprofileComponent,
    TimelineComponent,
    PostComponent,
    VuserpageComponent,
    VuserpageprofileComponent,
    CronologyComponent,
    CronologypostComponent,
    FollowspostsComponent
  ]
})
export class UserpageModule { }
