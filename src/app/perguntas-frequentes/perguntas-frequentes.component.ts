import { Component, OnInit } from '@angular/core';
import { ServicoService} from '../servicos/servico.service';

@Component({
  selector: 'app-perguntas-frequentes',
  templateUrl: './perguntas-frequentes.component.html',
  styleUrls: ['./perguntas-frequentes.component.css']
})
export class PerguntasFrequentesComponent implements OnInit {

  constructor(private perguntasService:ServicoService) { }

  ngOnInit() {
    //this.listarPerguntas();
  }
  perguntas=[
  	{
  		pergunta:'O que é o Cartão Jovem Angola?',
  		resposta:'O Cartão Jovem Angola é um cartão que concede descontos a jovens de idades compreendidas entre os 15 e os 35 anos em Angola. Os descontos aplicam-se a uma gama variada de serviços e eventos, desde cinemas e farmácias a mercados e restaurantes.'
  	},
  	{
  		pergunta:'Onde pode ser solicitado?',
  		resposta:'O Cartão Jovem Angola pode ser solicitado em qualquer um dos nossos postos de adesão fixos ou móveis em qualquer província angolana. Pode também ser solicitado online.'
  	},
  	{
  		pergunta:'Quanto Custa?',
  		resposta:'Dos 15 aos 25 anos de idade – 1500kzs',
  		resposta1:'Dos 25 aos 35 anos de idade – 2500kzs'
  	},
  	{
  		pergunta:'Qual a idade necessária?',
  		resposta:'A idade necessária para aderir ao Cartão Jovem Angola vai dos 15 aos 35 anos, havendo variação de preços de acordo à idade.'
  	},
  	{
  		pergunta:'Qual a validade do Cartão Jovem Angola?',
  		resposta:'O Cartão Jovem Angola só é válido por 1 ano após adesão, ou seja, é um cartão que requer renovação anual.'
  	}
  ];
  perguntasC:any;
  listarPerguntas(){
    this.perguntasService.todasPerguntas().subscribe(data => {
      // set items to json response
      this.perguntasC = data;
    });
  }
}
