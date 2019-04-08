import { Component, OnInit,ViewChild ,ElementRef} from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
//Notificações
import { ToastrService } from 'ngx-toastr';
//Calendar
import { BsLocaleService } from 'ngx-bootstrap/datepicker';

import { Membro,ImageSnippet } from '../model/membro';
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
    this.minDate.setDate(this.minDate.getDate() - 43800);//Idade minima 18
    this.maxDate.setDate(this.maxDate.getDate() - 6570);
    this.localeService.use('pt-br');
  }
  @ViewChild('imageInput') myInputVariable: ElementRef;
  membro:Membro=new Membro();
  termo:boolean=false;
  maxDate: Date;
  minDate: Date;
  dataNascimento:Date;
  dados;
  dados1;
  mensagem:string;
  selectedFile: ImageSnippet;
  file: File;
   file1=false;
  ngOnInit() {
    this.membro.genero='Masculino';
    //Chamar toastr no init
  	/*setTimeout(() => this.toastr.success('sup'))*/
  }
  //Controle checkbox
  termoChange() {
    this.termo =  !this.termo;
  }
  //Mudar o texto e estado botão submit
  changeTextButton(estado:boolean,texto:string){
    var element = <HTMLInputElement> document.getElementById("myButton");
    element.disabled = estado;
    element.textContent = texto;
  }
  //Limpar formulário
  clean(form:NgForm){
    form.reset();
    this.termoChange();
    this.changeTextButton(true,"Registrar");
    this.dados='';
    this.mensagem='';
    this.myInputVariable.nativeElement.value = "";
    this.selectedFile=null;
    this.file=null;

  }
  //Registp cartão jovem
  cadastrarMembro(form){
    this.changeTextButton(true,"Processando...");
    this.membro.dataNascimento=this.datePipe.transform(this.dataNascimento, 'yyyy-MM-dd');
  	this.membroService.uploadImage(this.selectedFile.file,this.membro).subscribe(data=> {

      console.log(data.data);
      console.log(data.QRCode);
      this.dados1=data.data;/**/

      this.mensagem='Registo feito com sucesso!';
      //this.showSuccess(this.dados._id);
      setTimeout(() =>this.clean(form),9000);    
    },
    error => {
        this.changeTextButton(false,"Registrar");
       	this.dados=error.error;
       	this.mensagem='';
       	console.log(this.dados)
    });
  }
  processFile(imageInput: any) {
    const reader = new FileReader();
    //if(event.target.files && event.target.files.length) {
      this.file = imageInput.files[0];
       
      reader.addEventListener('load', (event: any) => {
        this.selectedFile = new ImageSnippet(event.target.result, this.file);
      });
      reader.readAsDataURL(this.file); 
     //} 
  }
  processFile1(form) {
    //const file: File = imageInput.files[0];
    const reader = new FileReader();
    this.changeTextButton(true,"Processando...");
    this.membro.dataNascimento=this.datePipe.transform(this.dataNascimento, 'yyyy-MM-dd');
    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, this.file);

      this.membroService.uploadImage(this.selectedFile.file,this.membro).subscribe(
        (data) => {
          console.log(data);
          this.dados=data.data;
          this.mensagem='Registo feito com sucesso! O número de cartão é: ' +this.dados._id;
          setTimeout(() =>this.clean(form),9000)
        },
        (error) => {
          console.log(error)
          this.changeTextButton(false,"Registrar");
         this.dados=error.error;
         this.mensagem=error.error;
        
        })/**/
    });

    reader.readAsDataURL(this.file);
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
