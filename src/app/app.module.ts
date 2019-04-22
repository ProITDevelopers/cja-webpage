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

import { DataTablesModule } from 'angular-datatables';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistoComponent } from './registo/registo.component';
import { HomeComponent } from './home/home.component';
import { ContactosComponent } from './contactos/contactos.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { PerguntasFrequentesComponent } from './perguntas-frequentes/perguntas-frequentes.component';
import { RegulamentoComponent } from './regulamento/regulamento.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistoComponent,
    HomeComponent,
    ContactosComponent,
    HeaderComponent,
    FooterComponent,
    NoticiasComponent,
    PerguntasFrequentesComponent,
    RegulamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    DataTablesModule,
    BsDatepickerModule.forRoot(),
    NgxPaginationModule,
    OwlModule,
    ToastrModule.forRoot({
    timeOut: 20000,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
  })
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
