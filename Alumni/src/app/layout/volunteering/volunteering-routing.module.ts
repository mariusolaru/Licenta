import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VolunteeringComponent } from './volunteering.component';

const routes: Routes = [
  {
    path: '', 
    component: VolunteeringComponent
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VolunteeringRoutingModule { }
