import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { BurgersRoutingModule } from './burgers-routing.module';
import { BurgersComponent } from '../burgers/burgers.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    BurgersComponent, 
    ListComponent,
  ],
  imports: [
    SharedModule,
    
    BurgersRoutingModule,
  ]
})
export class BurgersModule { }
