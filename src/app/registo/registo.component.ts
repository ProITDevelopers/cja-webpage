import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { ToastrService } from 'ngx-toastr';

import { BsLocaleService } from 'ngx-bootstrap/datepicker';

import { Membro } from '../model/membro';
import { ServicoService} from '../servicos/servico.service';

@Component({
  selector: 'app-registo',
  templateUrl: './registo.component.html',
  styleUrls: ['./registo.component.css']
})
export class RegistoComponent implements OnInit {

  constructor(private membroService:ServicoService,private datePipe: DatePipe,
  	private toastr: ToastrService,private localeService: BsLocaleService) { 
  	this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 43800);
    this.maxDate.setDate(this.maxDate.getDate() - 6570);
    this.localeService.use('pt-br');
  }

  membro:Membro=new Membro();
  termo:boolean=false;
  maxDate: Date;
  minDate: Date;
  dados;
  mensagem:string;
  ngOnInit() {
  	//var dt=this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  	/*console.log(this.termo)
  	setTimeout(() => this.toastr.success('sup'))*/
  }
  termoChange() {
    this.termo =  !this.termo;
  }
  clean(form:NgForm){
  	form.reset();
  	this.termoChange();
  	this.dados='';
    this.mensagem='';

  }
  cadastrarMembro(form){
  	this.membroService.cadastrar(this.membro).subscribe(data=> {

        console.log(data)
        this.dados=data;

        this.mensagem='Registo feito com sucesso! O número de cartão é: ' +this.dados.Cliente_Id;
        //this.showSuccess(this.dados.Cliente_Id);
        setTimeout(() =>this.clean(form),3000 )
        
    },
       error => {
       	this.dados=error.error;
       	this.mensagem=error.error;
       	console.log(this.dados)
       //s this.showWarning('Ocorreu um erro.'+ this.dados);
        console.log(error);
    });

  }
   showSuccess(id) {
    this.toastr.success('Registo feito com sucesso! O número de cartão é: ' +id, 'Success!');
  }
    
  showError() {
    //this.toastr.error('Algo não está bem!'+ this.dados.mensagem, 'Oops!');
  }
  showWarning(mensagem) {
    this.toastr.warning(mensagem, 'Alert!');
  }
    
  showInfo() {
    this.toastr.info('Just some information for you.');
  }


}
