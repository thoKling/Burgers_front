import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { BurgersComponent } from './burgers.component';

const routes: Routes = [
    {
      path: '', component: BurgersComponent, children: [
        {
          path: 'details/:id', component: DetailsComponent
        },
        {
          path: 'list', component: ListComponent
        },
        {
          path: '', redirectTo: 'list', pathMatch: 'full'
        },
      ]
    }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BurgersRoutingModule { }