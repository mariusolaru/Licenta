import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsMeetingsComponent } from './events-meetings.component';

const routes: Routes = [
  {
    path: '', 
    component: EventsMeetingsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsMeetingsRoutingModule { }
