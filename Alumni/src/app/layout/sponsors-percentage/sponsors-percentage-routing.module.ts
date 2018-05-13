import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SponsorsPercentageComponent } from './sponsors-percentage.component';

const routes: Routes = [
  {
    path: '', 
    component: SponsorsPercentageComponent
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SponsorsPercentageRoutingModule { }
