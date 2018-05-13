import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraduatesRegisterComponent } from './graduates-register.component';

const routes: Routes = [
  {
    path: '', 
    component: GraduatesRegisterComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraduatesRegisterRoutingModule { }
