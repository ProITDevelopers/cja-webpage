import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistoComponent } from './registo/registo.component';
import { HomeComponent } from './home/home.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { PerguntasFrequentesComponent } from './perguntas-frequentes/perguntas-frequentes.component';
import { RegulamentoComponent } from './regulamento/regulamento.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

const routes: Routes = [
	{
	    path: '',
	    redirectTo: '/inicio',
	    pathMatch: 'full',
	},
  {
    path: 'inicio',
    component: HomeComponent,
    data: {
      title: 'Início'
    }
  }/*,
	{
    path: 'registo-cartao',
    component: RegistoComponent,
    data: {
      title: 'Registo de Cartão jovem'
    }
  }*/,
  {
    path: 'sobre-nos',
    component: SobreNosComponent,
    data: {
      title: 'Sobre nós'
    }
  },
  {
    path: 'perguntas-frequentes',
    component: PerguntasFrequentesComponent,
    data: {
      title: 'Perguntas frequentes'
    }
  },
  {
    path: 'regulamento',
    component: RegulamentoComponent,
    data: {
      title: 'Regulamento'
    }
  },
  {
    path: 'noticias',
    component: NoticiasComponent,
    data: {
      title: 'Notícias'
    }
  },
  { path: '**', redirectTo: '/inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/*imports: [RouterModule.forRoot(routes,{useHash:true,
  anchorScrolling: 'enabled'})],*/