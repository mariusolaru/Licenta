import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OportunitiesComponent } from './oportunities.component';

const routes: Routes = [
  {
    path: '', 
    component: OportunitiesComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OportunitiesRoutingModule { }
