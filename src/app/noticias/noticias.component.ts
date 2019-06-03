import { Component, OnInit } from '@angular/core';
import { ServicoService} from '../servicos/servico.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  constructor(private noticiasService:ServicoService) { }

  noticias=[
  	{
  		title:'Jovens sugerem construção de mais escolas e espaços culturais em Luanda',
  		src:'assets/noticias/1.jpg',
  		url:'https://noticias.sapo.ao/sociedade/artigos/jovens-sugerem-construcao-de-mais-escolas-e-espacos-culturais-em-luanda'
	},
	{
  		title:'MIJUD reafirma aposta na juventude',
  		src:'assets/noticias/2.jpg',
  		url:'https://noticias.sapo.ao/sociedade/artigos/mijud-reafirma-aposta-na-juventude'
	},
	{
  		title:'Lançados parâmetros para atendimento de crianças e adolescentes',
  		src:'assets/noticias/3.jpg',
  		url:'https://noticias.sapo.ao/sociedade/artigos/lancado-parametros-para-atendimento-de-criancas-e-adolescentes'
	},
	{
  		title:'Angola advoga protecção contínua das crianças em conflitos armados',
  		src:'assets/noticias/4.jpg',
  		url:'https://noticias.sapo.ao/sociedade/artigos/angola-advoga-proteccao-continua-das-criancas-em-conflitos-armados'
	},
	{
  		title:'Idai: Angola envia missão humanitária com 100 técnicos de saúde',
  		src:'assets/noticias/5.jpg',
  		url:'https://noticias.sapo.ao/sociedade/artigos/idai-angola-envia-missao-humanitaria-com-100-tecnicos-de-saude'
	},
	{
  		title:'Presidente da República encoraja Polícia Nacional no combate à criminalidade',
  		src:'assets/noticias/6.jpg',
  		url:'https://noticias.sapo.ao/sociedade/artigos/presidente-da-republica-encoraja-policia-nacional-no-combate-a-criminalidade'
	},
  	{
  		title:'Grande Show Solidário Angola & Moçambique “Juntos pela mesma causa”',
  		src:'assets/noticias/7.jpg',
  		url:'https://www.instagram.com/p/BwSjthRhzpF/?utm_source=ig_share_sheet&igshid=19zxg2mkuy0ob'
	},
  	{
  		title:'Tour Mobbers “SobPressão” by Jade!',
  		src:'',
  		url:'https://www.instagram.com/p/BuTh1WAgggZ/?utm_source=ig_share_sheet&igshid=3pbnbj9kjqc8'
  	},
  	{
  		title:'Campanha solidária ZAP',
  		src:'',
  		url:'https://www.instagram.com/bwevip/p/BwCm_kCjU2p/?utm_source=ig_share_sheet&igshid=vxu2cdh4omwz'
   	},
	{
  		title:'Dia mundial do desenhista',
  		src:'',
  		url:'https://www.instagram.com/p/BwR1XW3FBzK/?utm_source=ig_share_sheet&igshid=gtgnydp9asri'
  	},
  	{
  		title:'Angola vai receber as últimas 21 locomotivas da General Eletric (GE) em 2020',
  		src:'',
  		url:'https://www.instagram.com/p/BwHHgoyFwOI/?utm_source=ig_share_sheet&igshid=3sz4w1kyg20h'
  	},
  	{
  		title:'Naice Zulu incentiva juventude angolana a lutar pelos seus objectivos',
  		src:'',
  		url:'https://bwevip.com/naice-zulu-incentiva-juventude-angolana-a-lutar/'
  	},
  	{
  		title:'Puto Prata garante 45 vagas para cursos bancários aos jovens',
  		src:'',
  		url:'https://bwevip.com/puto-prata-garante-45-vagas-para-cursos-bancarios-aos-jovens/'
  	},
  	{
  		title:'Projectos de micro-finanças podem acelerar o empreendedorismo no país',
  		src:'',
  		url:'https://noticias.sapo.ao/economia/artigos/projectos-de-micro-financas-podem-acelerar-o-empreendedorismo-no-pais'
  	},
  	{
  		title:'Desalojados pelas chuvas beneficiam de doação do Minint',
  		src:'',
  		url:'http://m.portalangop.co.ao/angola/pt_pt/mobile/noticias/sociedade/2019/2/10/Desalojados-pelas-chuvas-beneficiam-doacao-Minint,13a30a26-ee70-42ab-bfc3-322ad1876623.html?version=mobile'
  	},
  	{
  		title:'2.ª edição do torneio "Craques da Escola"',
  		src:'',
  		url:'https://www.verangola.net/va/pt/042019/eventos/14855/2%C2%AA-edi%C3%A7%C3%A3o-do-torneio-Craques-da-Escola-Desporto.htm'
  	},
  	{
  		title:'Curso "Como Falar em Público e Fazer Apresentações"',
  		src:'',
  		url:'https://www.verangola.net/va/pt/042019/eventos/14823/Curso-Como-Falar-em-P%C3%BAblico-e-Fazer-Apresenta%C3%A7%C3%B5es-Workshops.htm'
  	},
  	{
  		title:'ANGOTIC – Angola ICT Forum',
  		src:'',
  		url:'https://www.verangola.net/va/pt/122018/eventos/13803/ANGOTIC-%E2%80%93-Angola-ICT-Forum-Empresarial-Feiras.htm'
  	},
  	{
  		title:'Café do Arquitecto: Propriedade Intelectual na Arquitectura',
  		src:'',
  		url:'https://www.verangola.net/va/pt/032019/eventos/14643/Caf%C3%A9-do-Arquitecto-Propriedade-Intelectual-na-Arquitectura-Empresarial.htm'
  	}
  ];
  p:number;
  noticiasC:any;

  ngOnInit() {
  	this.p=1;
    //this.listarNoticias();
  }
  listarNoticias(){
    this.noticiasService.todasNoticias().subscribe(data => {
      // set items to json response
      this.noticiasC = data;
    });
  }
}
