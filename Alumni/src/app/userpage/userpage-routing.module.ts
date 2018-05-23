import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserpageComponent } from './userpage.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { DashboardComponent } from '../layout/dashboard/dashboard.component';

 const routes: Routes = [
   {
     path: '', 
     component: UserpageComponent,
     children: [
       { path: '', redirectTo: 'login/userpage/timeline', pathMatch: 'full'}
   ]
 }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserpageRoutingModule { }
