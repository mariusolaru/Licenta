import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraduatesPortraitsComponent } from './graduates-portraits.component';

const routes: Routes = [
  {
    path: '', 
    component: GraduatesPortraitsComponent
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraduatesPortraitsRoutingModule { }
