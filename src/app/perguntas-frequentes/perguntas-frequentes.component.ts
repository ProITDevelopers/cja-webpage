import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perguntas-frequentes',
  templateUrl: './perguntas-frequentes.component.html',
  styleUrls: ['./perguntas-frequentes.component.css']
})
export class PerguntasFrequentesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  perguntas=[
  	{
  		pergunta:' O que é o cartão jovem?',
  		resposta:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven'+'t'+' heard of them accusamus labore sustainable VHS.'
  	},
  	{
  		pergunta:'Como posso adquirir o cartão?',
  		resposta:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.'
  	},
  	{
  		pergunta:'Onde estão localizados?',
  		resposta:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.'
  	}
  ]

}
