import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CronologyComponent } from './cronology.component';

const routes: Routes = [
  {
    path: '', 
    component: CronologyComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CronologyRoutingModule { }
