import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VolunteeringActionComponent } from './volunteering-action.component';

const routes: Routes = [
  {
    path: '', 
    component: VolunteeringActionComponent
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VolunteeringActionRoutingModule { }
