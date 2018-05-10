import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsPartnershipComponent } from './events-partnership.component';

const routes: Routes = [
  {
    path: '', 
    component: EventsPartnershipComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsPartnershipRoutingModule { }
