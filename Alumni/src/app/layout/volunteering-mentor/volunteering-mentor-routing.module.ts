import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VolunteeringMentorComponent } from './volunteering-mentor.component';

const routes: Routes = [
  {
    path: '', 
    component: VolunteeringMentorComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VolunteeringMentorRoutingModule { }
