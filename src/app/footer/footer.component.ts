import { Component, OnInit } from '@angular/core';
import { Mensagem } from '../model/mensagem';
import { SendEmailService } from '../servicos/send-email.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private emailService:SendEmailService) { }

  mensagem:Mensagem=new Mensagem();
  dados;
  dados1;
  msg:string;

  ngOnInit() {
  }
  enviarMensagem(form){
	this.changeTextButton(true,"Enviando...");
  	this.emailService.enviar(this.mensagem).subscribe(data=> {

      console.log(data);
      this.dados1=data.mensagem;/**/
      this.dados='';
      this.msg='Mensagem enviada com sucesso!';
      setTimeout(() =>this.clean(form),9000);    
    },
    error => {
        this.changeTextButton(false,"Enviar");
       	this.dados=error;
       	this.msg='';
       	//console.log(this.dados.error)
    });
  }
  //Mudar botão
  changeTextButton(estado:boolean,texto:string){
    var element = <HTMLInputElement> document.getElementById("enviar");
    element.disabled = estado;
    element.textContent = texto;
  }
  //Limpar formulário
  clean(form:NgForm){
    form.reset();
    this.changeTextButton(true,"Enviar");
    this.dados='';
    this.msg='';
  }

}
