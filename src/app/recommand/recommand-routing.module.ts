import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecommandContainerComponent } from './components';


const routes: Routes = [
  {path: 'recommand', component: RecommandContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecommandRoutingModule { }
