import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserpageComponent } from './userpage.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { DashboardComponent } from '../layout/dashboard/dashboard.component';

// const routes: Routes = [
//   {
//     path: '', 
//     component: UserpageComponent,
//     children: [
//       { path: '', redirectTo: 'dashboard/applogin-navbar/userpage/timeline', pathMatch: 'full'}
//   ]
// }
// ];

@NgModule({
  // imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserpageRoutingModule { }
