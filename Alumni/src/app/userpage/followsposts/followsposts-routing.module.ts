import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FollowspostsComponent } from './followsposts.component';

const routes: Routes = [
  {
    path: '', 
    component: FollowspostsComponent
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FollowspostsRoutingModule { }
