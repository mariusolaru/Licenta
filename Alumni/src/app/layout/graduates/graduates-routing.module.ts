import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraduatesComponent } from './graduates.component';

const routes: Routes = [
  {
    path: '', 
    component: GraduatesComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraduatesRoutingModule { }
