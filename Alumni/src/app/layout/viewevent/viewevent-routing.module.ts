import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VieweventComponent } from './viewevent.component';

const routes: Routes = [
  {
    path: '', 
    component: VieweventComponent
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VieweventRoutingModule { }
