import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserpageComponent } from './userpage.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { DashboardComponent } from '../layout/dashboard/dashboard.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { VuserpageComponent } from './vuserpage/vuserpage.component';
import { VuserpageprofileComponent } from './vuserpageprofile/vuserpageprofile.component';

 const routes: Routes = [
  {
    path: '',
    component: UserpageComponent,
    children: [
      { path: '', redirectTo: 'timeline' , pathMatch: 'full'}, 
      { path: 'timeline', component: TimelineComponent },
      { path: 'dashboard', component: DashboardComponent},
      { path: 'userprofile', component: UserprofileComponent},
      { path: 'home/timeline/v', redirectTo: 'v'},
      { path: 'v/:id', component: VuserpageprofileComponent},
      { path: 'v/:id/profile', component:  VuserpageComponent}
    ]
  }
 ];
//acu sa ma pot intoarce pe aia de cronologie arata unde ai cronologie
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserpageRoutingModule { }
