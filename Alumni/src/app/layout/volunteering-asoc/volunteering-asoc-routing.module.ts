import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VolunteeringAsocComponent } from './volunteering-asoc.component';

const routes: Routes = [
  {
    path: '', 
    component: VolunteeringAsocComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VolunteeringAsocRoutingModule { }
