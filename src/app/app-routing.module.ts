import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistoComponent } from './registo/registo.component';
import { HomeComponent } from './home/home.component';
import { ContactosComponent } from './contactos/contactos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { PerguntasFrequentesComponent } from './perguntas-frequentes/perguntas-frequentes.component';
import { RegulamentoComponent } from './regulamento/regulamento.component';

const routes: Routes = [
	{
	    path: '',
	    redirectTo: '/inicio',
	    pathMatch: 'full',
	},
  {
    path: 'inicio',
    component: HomeComponent,
    //canActivate:[GuardGuard,AdminGuard],
    data: {
      title: 'Início'
    }
  },
	{
    path: 'registo-cartao',
    component: RegistoComponent,
    //canActivate:[GuardGuard,AdminGuard],
    data: {
      title: 'Registo de Cartão jovem'
    }
  }/*,
  {
    path: 'contactos',
    component: ContactosComponent,
    //canActivate:[GuardGuard,AdminGuard],
    data: {
      title: 'Contactos'
    }
  }*/,
  {
    path: 'perguntas-frequentes',
    component: PerguntasFrequentesComponent,
    //canActivate:[GuardGuard,AdminGuard],
    data: {
      title: 'Perguntas frequentes'
    }
  },
  {
    path: 'regulamento',
    component: RegulamentoComponent,
    //canActivate:[GuardGuard,AdminGuard],
    data: {
      title: 'Regulamento'
    }
  },
  {
    path: 'noticias',
    component: NoticiasComponent,
    //canActivate:[GuardGuard,AdminGuard],
    data: {
      title: 'Notícias'
    }
  },
  { path: '**', redirectTo: '/inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true,
  anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
