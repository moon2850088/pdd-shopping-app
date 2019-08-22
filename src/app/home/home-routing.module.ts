import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent, HomeDetailComponent, HomeGrandComponent, ParentComponent } from './components';


const routes: Routes = [
  {
    path: 'home',
    component: HomeContainerComponent,
    children: [
      {
        path: '', // 默认值
        redirectTo: 'hot', //重定向
        pathMatch: 'full'

      },
      {
        path: ':tabLink', // 
        component: HomeDetailComponent,
        children: [
          {
          path: 'grand',
          component: HomeGrandComponent,
          }
          ]
      }
    ]
  },
  {
    path: 'change-detection',
    pathMatch: 'full',
    component: ParentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
