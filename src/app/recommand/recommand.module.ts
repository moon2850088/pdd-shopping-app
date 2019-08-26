import { NgModule } from '@angular/core';

import { RecommandRoutingModule } from './recommand-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RecommandContainerComponent } from './components';


@NgModule({
  declarations: [RecommandContainerComponent],
  imports: [
    SharedModule,
    RecommandRoutingModule
  ]
})
export class RecommandModule { }
