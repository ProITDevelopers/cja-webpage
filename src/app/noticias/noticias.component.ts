import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticias=[
  	{
  		title:'Grande Show Solidário Angola & Moçambique “Juntos pela mesma causa”',
  		description:'',
  		url:'https://www.instagram.com/p/BwSjthRhzpF/?utm_source=ig_share_sheet&igshid=19zxg2mkuy0ob'
	},
  	{
  		title:'Tour Mobbers “SobPressão” by Jade!',
  		description:'',
  		url:'https://www.instagram.com/p/BuTh1WAgggZ/?utm_source=ig_share_sheet&igshid=3pbnbj9kjqc8'
  	},
  	{
  		title:'Campanha solidária ZAP',
  		description:'',
  		url:'https://www.instagram.com/bwevip/p/BwCm_kCjU2p/?utm_source=ig_share_sheet&igshid=vxu2cdh4omwz'
   	},
	{
  		title:'Dia mundial do desenhista',
  		description:'https://www.instagram.com/p/BwR1XW3FBzK/?utm_source=ig_share_sheet&igshid=gtgnydp9asri',
  		url:''
  	},
  	{
  		title:'Angola vai receber as últimas 21 locomotivas da General Eletric (GE) em 2020',
  		description:'',
  		url:'https://www.instagram.com/p/BwHHgoyFwOI/?utm_source=ig_share_sheet&igshid=3sz4w1kyg20h'
  	},
  	{
  		title:'Naice Zulu incentiva juventude angolana a lutar pelos seus objectivos',
  		description:'',
  		url:'https://bwevip.com/naice-zulu-incentiva-juventude-angolana-a-lutar/'
  	},
  	{
  		title:'Puto Prata garante 45 vagas para cursos bancários aos jovens',
  		description:'',
  		url:'https://bwevip.com/puto-prata-garante-45-vagas-para-cursos-bancarios-aos-jovens/'
  	},
  	{
  		title:'Projectos de micro-finanças podem acelerar o empreendedorismo no país',
  		description:'',
  		url:'https://noticias.sapo.ao/economia/artigos/projectos-de-micro-financas-podem-acelerar-o-empreendedorismo-no-pais'
  	},
  	{
  		title:'Desalojados pelas chuvas beneficiam de doação do Minint',
  		description:'',
  		url:'http://m.portalangop.co.ao/angola/pt_pt/mobile/noticias/sociedade/2019/2/10/Desalojados-pelas-chuvas-beneficiam-doacao-Minint,13a30a26-ee70-42ab-bfc3-322ad1876623.html?version=mobile'
  	},
  	{
  		title:'2.ª edição do torneio "Craques da Escola"',
  		description:'',
  		url:'https://www.verangola.net/va/pt/042019/eventos/14855/2%C2%AA-edi%C3%A7%C3%A3o-do-torneio-Craques-da-Escola-Desporto.htm'
  	},
  	{
  		title:'Curso "Como Falar em Público e Fazer Apresentações"',
  		description:'',
  		url:'https://www.verangola.net/va/pt/042019/eventos/14823/Curso-Como-Falar-em-P%C3%BAblico-e-Fazer-Apresenta%C3%A7%C3%B5es-Workshops.htm'
  	},
  	{
  		title:'ANGOTIC – Angola ICT Forum',
  		description:'',
  		url:'https://www.verangola.net/va/pt/122018/eventos/13803/ANGOTIC-%E2%80%93-Angola-ICT-Forum-Empresarial-Feiras.htm'
  	},
  	{
  		title:'Café do Arquitecto: Propriedade Intelectual na Arquitectura',
  		description:'',
  		url:'https://www.verangola.net/va/pt/032019/eventos/14643/Caf%C3%A9-do-Arquitecto-Propriedade-Intelectual-na-Arquitectura-Empresarial.htm'
  	}
  ];
  p:number;
  constructor() { }

  ngOnInit() {
  	this.p=1;
  }
  /*pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.noticias = this.noticias.slice(startItem, endItem);
  }*/
}
