import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistoComponent } from './registo/registo.component';

const routes: Routes = [
	{
	    path: '',
	    redirectTo: '/registo-cartao',
	    pathMatch: 'full',
	},
	{
    path: 'registo-cartao',
    component: RegistoComponent,
    //canActivate:[GuardGuard,AdminGuard],
    data: {
      title: 'Registo de Cartão jovem'
    }
  },
  { path: '**', redirectTo: '/registo' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
