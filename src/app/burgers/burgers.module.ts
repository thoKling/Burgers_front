import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { BurgersRoutingModule } from './burgers-routing.module';
import { BurgersComponent } from '../burgers/burgers.component';
import { ListComponent } from './list/list.component';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { DetailsComponent } from './details/details.component'; 

@NgModule({
  declarations: [
    BurgersComponent, 
    ListComponent, 
    DetailsComponent,
  ],
  imports: [
    SharedModule,
    
    MatCardModule,
    MatListModule,
    MatButtonModule,

    BurgersRoutingModule,
  ]
})
export class BurgersModule { }
