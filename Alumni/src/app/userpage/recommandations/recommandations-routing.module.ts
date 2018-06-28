import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecommandationsComponent } from './recommandations.component';

const routes: Routes = [
  {
    path: '', 
    component: RecommandationsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecommandationsRoutingModule { }
