import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'aboutus-mission', loadChildren: './aboutus-mission/aboutus-mission.module#AboutusMissionModule' },
            { path: 'aboutus', loadChildren: './aboutus/aboutus.module#AboutusModule' },
            { path: 'aboutus-council', loadChildren: './aboutus-council/aboutus-council.module#AboutusCouncilModule' },
            { path: 'aboutus-group', loadChildren: './aboutus-group/aboutus-group.module#AboutusGroupModule' },
            { path: 'events', loadChildren: './events/events.module#EventsModule' },
            { path: 'events-festive', loadChildren: './events-festive/events-festive.module#EventsFestiveModule' },
            { path: 'events-meetings', loadChildren: './events-meetings/events-meetings.module#EventsMeetingsModule' },
            { path: 'events-partnership', loadChildren: './events-partnership/events-partnership.module#EventsPartnershipModule' },
            { path: 'projects', loadChildren: './projects/projects.module#ProjectsModule' },
            { path: 'graduates', loadChildren: './graduates/graduates.module#GraduatesModule' },
            { path: 'graduates-portraits', loadChildren: './graduates-portraits/graduates-portraits.module#GraduatesPortraitsModule' },
            { path: 'graduates-register', loadChildren: './graduates-register/graduates-register.module#GraduatesRegisterModule' },
            { path: 'volunteering', loadChildren: './volunteering/volunteering.module#VolunteeringModule' },
            { path: 'volunteering-action', loadChildren: './volunteering-action/volunteering-action.module#VolunteeringActionModule' },
            { path: 'volunteering-asoc', loadChildren: './volunteering-asoc/volunteering-asoc.module#VolunteeringAsocModule' },
            { path: 'volunteering-mentor', loadChildren: './volunteering-mentor/volunteering-mentor.module#VolunteeringMentorModule' },
            { path: 'oportunities', loadChildren: './oportunities/oportunities.module#OportunitiesModule' },
            { path: 'sponsors', loadChildren: './sponsors/sponsors.module#SponsorsModule' },
            { path: 'sponsors-percentage', loadChildren: './sponsors-percentage/sponsors-percentage.module#SponsorsPercentageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
