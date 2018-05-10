import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusMissionComponent } from './aboutus-mission.component'

const routes: Routes = [
  {
      path: '', 
      component: AboutusMissionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutusMissionRoutingModule { }
