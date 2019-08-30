import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistoComponent } from './registo/registo.component';
import { HomeComponent } from './home/home.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { PerguntasFrequentesComponent } from './perguntas-frequentes/perguntas-frequentes.component';
import { RegulamentoComponent } from './regulamento/regulamento.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { JovensmaisComponent } from './jovensmais/jovensmais.component';
import { SegViaComponent } from './registo/seg-via.component';
import { ParceirosComponent } from './parceiros/parceiros.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: HomeComponent,
    data: {
      title: 'Início'
    }
  },
  {
    path: 'registo-cartao',
    component: RegistoComponent,
    data: {
      title: 'Registo de Cartão jovem'
    }
  },
  {
    path: 'segunda-via',
    component: SegViaComponent,
    data: {
      title: 'Informação 2ª Via'
    }
  },
  {
    path: 'parceiros',
    component: ParceirosComponent,
    data: {
      title: 'Parceiros CJA'
    }
  },
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
    path: 'comunidade-jovem',
    component: NoticiasComponent,
    data: {
      title: 'Comunidade Jovem'
    }
  },
  {
    path: 'jovensmais',
    component: JovensmaisComponent,
    data: {
      title: 'Jovens Mais'
    }
  },
  { path: '**', redirectTo: '/inicio' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
