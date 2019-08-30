import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Membro } from '../model/membro';
import { ServicoService } from '../servicos/servico.service';

import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';

@Component({
  selector: 'app-seg-via',
  providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  templateUrl: './seg-via.component.html',
  styleUrls: ['./seg-via.component.css']
})
export class SegViaComponent implements OnInit {
  pesquisaRefForm: FormGroup;
  clique;
  clique2;
  dadosRef;
  mensagem;
  mensagem2;
  membro: Membro;
  constructor(private servico: ServicoService, private form: FormBuilder) {}

  ngOnInit() {
    this.clique = false;
    this.clique2 = false;
    this.pesquisaRefForm = this.form.group({
      telemovel: ['', [
        Validators.required,
        /* Validators.maxLength(9), */
        Validators.minLength(9),
        Validators.pattern('[9]{1}[1-9]{2}[0-9]{6}')
      ]]
    });
  }

  verificaEstado() {
    this.clique = true;
    this.servico
      .getEstadoRef(this.pesquisaRefForm.get('telemovel').value)
      .subscribe(
        resConsulta => {
          if (resConsulta.estado === 'PAGA') {
            this.dadosRef = resConsulta;
            setTimeout(() => {
              this.dadosRef = null;
              this.clique = false;
            }, 6000);
          } else {
            this.dadosRef = resConsulta;
            this.mensagem = null;
            this.mensagem2 = null;
            this.clique = false;
          }
        },
        erroConsulta => {
          this.mensagem = erroConsulta.error;
          this.mensagem2 = null;
          this.clique = false;
          setTimeout(() => {
            this.mensagem = null;
          }, 4000);
        }
      );
  }

  solicitarReferencia() {
    this.clique2 = true;
    this.servico.postSolicitarRef(this.pesquisaRefForm.value).subscribe(
      resSolitacao => {
        this.clique2 = false;
        this.mensagem = null;
        this.dadosRef = null;
        this.mensagem2 = resSolitacao;
      },
      erroConsulta => {
        this.clique2 = false;
        this.mensagem = null;
        this.mensagem2 = erroConsulta.error;
        this.clique = false;
        setTimeout(() => {
          this.mensagem2 = null;
        }, 4000);
      }
    );
  } /*    */
}
