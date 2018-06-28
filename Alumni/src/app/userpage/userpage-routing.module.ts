import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserpageComponent } from './userpage.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { DashboardComponent } from '../layout/dashboard/dashboard.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { VuserpageComponent } from './vuserpage/vuserpage.component';
import { VuserpageprofileComponent } from './vuserpageprofile/vuserpageprofile.component';
import { AboutusMissionComponent } from '../layout/aboutus-mission/aboutus-mission.component';
import { AboutusComponent } from '../layout/aboutus/aboutus.component';
import { AboutusCouncilComponent } from '../layout/aboutus-council/aboutus-council.component';
import { AboutusGroupComponent } from '../layout/aboutus-group/aboutus-group.component';
import { EventsComponent } from '../layout/events/events.component';
import { EventsFestiveComponent } from '../layout/events-festive/events-festive.component';
import { EventsMeetingsComponent } from '../layout/events-meetings/events-meetings.component';
import { EventsPartnershipComponent } from '../layout/events-partnership/events-partnership.component';
import { ProjectsComponent } from '../layout/projects/projects.component';
import { GraduatesComponent } from '../layout/graduates/graduates.component';
import { GraduatesPortraitsComponent } from '../layout/graduates-portraits/graduates-portraits.component';
import { GraduatesRegisterComponent } from '../layout/graduates-register/graduates-register.component';
import { VolunteeringComponent } from '../layout/volunteering/volunteering.component';
import { VolunteeringActionComponent } from '../layout/volunteering-action/volunteering-action.component';
import { VolunteeringAsocComponent } from '../layout/volunteering-asoc/volunteering-asoc.component';
import { VolunteeringMentorComponent } from '../layout/volunteering-mentor/volunteering-mentor.component';
import { OportunitiesComponent } from '../layout/oportunities/oportunities.component';
import { SponsorsComponent } from '../layout/sponsors/sponsors.component';
import { SponsorsPercentageComponent } from '../layout/sponsors-percentage/sponsors-percentage.component';
import { StudiesComponent } from '../layout/studies/studies.component';
import { ViewarticleComponent } from '../layout/viewarticle/viewarticle.component';
import { VieweventComponent } from '../layout/viewevent/viewevent.component';
import { CronologyComponent } from './cronology/cronology.component';
import { FollowspostsComponent } from './followsposts/followsposts.component';
import { RecommandationsComponent } from './recommandations/recommandations.component';

 const routes: Routes = [
  {
    path: '',
    component: UserpageComponent,
    children: [
      { path: '', redirectTo: 'cronology' , pathMatch: 'full'}, 
      { path: 'timeline', component: TimelineComponent },
      { path: 'cronology', component: CronologyComponent},
      { path: 'follow', component: FollowspostsComponent},
      { path: 'recommandations', component: RecommandationsComponent},
      { path: 'dashboard', component: DashboardComponent},
      { path: 'userprofile', component: UserprofileComponent},
      { path: 'home/timeline/v', redirectTo: 'v'},
      { path: 'home/cronology/v', redirectTo: 'v'},
      { path: 'home/recommandations/v', redirectTo: 'v'},
      { path: 'v/:id', component: VuserpageprofileComponent},
      { path: 'v/:id/profile', component:  VuserpageComponent},
      { path: 'aboutus-mission', component: AboutusMissionComponent},
      { path: 'aboutus', component: AboutusComponent},
      { path: 'aboutus-council', component: AboutusCouncilComponent},
      { path: 'aboutus-group', component: AboutusGroupComponent},
      { path: 'events', component: EventsComponent},
      { path: 'events-festive', component: EventsFestiveComponent},
      { path: 'events-meetings', component: EventsMeetingsComponent},
      { path: 'events-partnership', component: EventsPartnershipComponent},
      { path: 'projects', component: ProjectsComponent},
      { path: 'graduates', component: GraduatesComponent},
      { path: 'graduates-portraits', component: GraduatesPortraitsComponent},
      { path: 'graduates-register', component: GraduatesRegisterComponent},
      { path: 'volunteering', component: VolunteeringComponent},
      { path: 'volunteering-action', component: VolunteeringActionComponent},
      { path: 'volunteering-asoc', component: VolunteeringAsocComponent},
      { path: 'volunteering-mentor', component: VolunteeringMentorComponent},
      { path: 'oportunities', component: OportunitiesComponent},
      { path: 'sponsors', component: SponsorsComponent},
      { path: 'sponsors-percentage', component: SponsorsPercentageComponent},
      { path: 'studies', component: StudiesComponent},
      { path: 'home/dashboard/article', redirectTo: './article'},
      { path: './article/:id', component: ViewarticleComponent },
      { path: 'home/events/event', redirectTo: './event'},
      { path: './event/:id', component: VieweventComponent }
    ]
  }
 ];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserpageRoutingModule { }
