import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
// Calendar
import { BsLocaleService } from 'ngx-bootstrap/datepicker';

import { Membro, ImageSnippet } from '../model/membro';
import { ServicoService } from '../servicos/servico.service';

@Component({
  selector: 'app-registo',
  templateUrl: './registo.component.html',
  styleUrls: ['./registo.component.css']
})
export class RegistoComponent implements OnInit {
  constructor(
    private membroService: ServicoService,
    private datePipe: DatePipe,
    private localeService: BsLocaleService
  ) {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 13148); // Idade maxima 35
    this.maxDate.setDate(this.maxDate.getDate() - 5475); // Idade minima 15
    this.localeService.use('pt-br');
  }
  @ViewChild('imageInput') myInputVariable: ElementRef;
  membro: Membro = new Membro();
  termo = false;
  maxDate: Date;
  minDate: Date;
  dataNascimento: Date;
  dados;
  dados1;
  mensagem: string;
  selectedFile: ImageSnippet;
  file: File;
  file1 = false;

  municipios: Observable<any[]>;
  cidades: Observable<any[]>;

  ngOnInit() {
    this.getCidades();
    this.membro.genero = 'masculino';
  }
  // Controle checkbox
  termoChange() {
    this.termo = !this.termo;
  }
  // Mudar o texto e estado botão submit
  changeTextButton(estado: boolean, texto: string) {
    const element = <HTMLInputElement>document.getElementById('myButton');
    element.disabled = estado;
    element.textContent = texto;
  }
  // Limpar formulário
  clean(form: NgForm) {
    form.reset();
    this.termoChange();
    this.changeTextButton(true, 'Registrar');
    this.dados = '';
    this.mensagem = '';
    this.myInputVariable.nativeElement.value = '';
    this.selectedFile = null;
    this.file = null;
  }
  // Registp cartão jovem
  cadastrarMembro(form) {
    this.changeTextButton(true, 'Processando...');
    this.membro.dataNascimento = this.datePipe.transform(
      this.dataNascimento,
      'yyyy-MM-dd'
    );
    this.membro.nomeProprio = this.membro.nomeProprio.toLowerCase();
    this.membro.apelido = this.membro.apelido.toLowerCase();
    /* this.membro.email = this.membro.apelido.toLocaleLowerCase(); */
    this.membroService
      .uploadImage(this.selectedFile.file, this.membro)
      .subscribe(
        data => {
          this.dados1 = data.data;
          this.dados = '';
          this.mensagem =
            'Inscrição feita com sucesso. Receberá um email e uma mensagem no seu telemóvel com a referência de pagamento.';
          // this.showSuccess(this.dados._id);
          setTimeout(() => this.clean(form), 9000);
        },
        error => {
          this.changeTextButton(false, 'Registrar');
          this.dados = error.error.erro;
          this.mensagem = '';
        }
      );
  }
  processFile(imageInput: any) {
    const reader = new FileReader();
    // if(event.target.files && event.target.files.length) {
    this.file = imageInput.files[0];

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, this.file);
    });
    reader.readAsDataURL(this.file);
    // }
  }
  processFile1(form) {
    // const file: File = imageInput.files[0];
    const reader = new FileReader();
    this.changeTextButton(true, 'Processando...');
    this.membro.dataNascimento = this.datePipe.transform(
      this.dataNascimento,
      'yyyy-MM-dd'
    );
    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, this.file);

      this.membroService
        .uploadImage(this.selectedFile.file, this.membro)
        .subscribe(
          data => {
            this.dados = data.data;
            this.mensagem =
              'Inscrição feita com sucesso. Receberá um email e uma mensagem no seu telemóvel com a referência de pagamento.';
            // 'Registo feito com sucesso! O número de cartão é: ' +this.dados._id;
            setTimeout(() => this.clean(form), 9000);
          },
          error => {
            this.changeTextButton(false, 'Registrar');
            this.dados = error.error;
            this.mensagem = error.error;
          }
        );
    });

    reader.readAsDataURL(this.file);
  }
  getCidades() {
    this.cidades = this.membroService.cidades();
  }
  onSelect(municipio) {
    if (municipio !== '') {
      this.municipios = this.membroService.municipios(municipio);
    }
  }
}
