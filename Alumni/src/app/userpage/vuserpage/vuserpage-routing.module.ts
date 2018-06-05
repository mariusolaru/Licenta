import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VuserpageComponent } from './vuserpage.component';

const routes: Routes = [
  {
    path: '', 
    component: VuserpageComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VuserpageRoutingModule { }
