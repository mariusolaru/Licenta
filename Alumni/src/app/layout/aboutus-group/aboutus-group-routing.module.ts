import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusGroupComponent } from './aboutus-group.component'

const routes: Routes = [
  {
      path: '', 
      component: AboutusGroupComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutusGroupRoutingModule { }
