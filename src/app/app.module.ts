import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DatePipe} from '@angular/common';
import { OwlModule } from 'ngx-owl-carousel';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
//import { PaginationModule } from 'ngx-bootstrap/pagination';
import {NgxPaginationModule} from 'ngx-pagination';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
defineLocale('pt-br', ptBrLocale); 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistoComponent } from './registo/registo.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { PerguntasFrequentesComponent } from './perguntas-frequentes/perguntas-frequentes.component';
import { RegulamentoComponent } from './regulamento/regulamento.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistoComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NoticiasComponent,
    PerguntasFrequentesComponent,
    RegulamentoComponent,
    SobreNosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    NgxPaginationModule,
    OwlModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
