import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'burgers', loadChildren: () => import('./burgers/burgers.module').then(m => m.BurgersModule)},
  
  //{ path: '**', redirectTo: 'burgers' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
