import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'aboutus-mission', loadChildren: './aboutus-mission/aboutus-mission.module#AboutusMissionModule' },
            { path: 'aboutus', loadChildren: './aboutus/aboutus.module#AboutusModule' },
            { path: 'aboutus-council', loadChildren: './aboutus-council/aboutus-council.module#AboutusCouncilModule' },
            { path: 'aboutus-group', loadChildren: './aboutus-group/aboutus-group.module#AboutusGroupModule' },
            { path: 'events', loadChildren: './events/events.module#EventsModule' },
            { path: 'events-festive', loadChildren: './events-festive/events-festive.module#EventsFestiveModule' },
            { path: 'events-meetings', loadChildren: './events-meetings/events-meetings.module#EventsMeetingsModule' },
            { path: 'events-partnership', loadChildren: './events-partnership/events-partnership.module#EventsPartnershipModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
