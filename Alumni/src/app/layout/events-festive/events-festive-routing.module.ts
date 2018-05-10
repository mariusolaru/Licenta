import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsFestiveComponent } from './events-festive.component';

const routes: Routes = [
  {
    path: '', 
    component: EventsFestiveComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsFestiveRoutingModule { }
