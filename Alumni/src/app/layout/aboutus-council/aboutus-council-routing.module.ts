import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusCouncilComponent } from './aboutus-council.component'

const routes: Routes = [
  {
      path: '', 
      component: AboutusCouncilComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutusCouncilRoutingModule { }
