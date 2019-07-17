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
    titulo:'Jovens sugerem construção de mais escolas e espaços culturais em Luanda',
    imagem:'assets/noticias/1.jpg',
    url:'https://noticias.sapo.ao/sociedade/artigos/jovens-sugerem-construcao-de-mais-escolas-e-espacos-culturais-em-luanda'
  },
  {
    titulo:'MIJUD reafirma aposta na juventude',
    imagem:'assets/noticias/2.jpg',
    url:'https://noticias.sapo.ao/sociedade/artigos/mijud-reafirma-aposta-na-juventude'
  },
  {
    titulo:'Lançados parâmetros para atendimento de crianças e adolescentes',
    imagem:'assets/noticias/3.jpg',
    url:'https://noticias.sapo.ao/sociedade/artigos/lancado-parametros-para-atendimento-de-criancas-e-adolescentes'
  },
  {
    titulo:'Angola advoga protecção contínua das crianças em conflitos armados',
    imagem:'assets/noticias/4.jpg',
    url:'https://noticias.sapo.ao/sociedade/artigos/angola-advoga-proteccao-continua-das-criancas-em-conflitos-armados'
  },
  {
    titulo:'Idai: Angola envia missão humanitária com 100 técnicos de saúde',
    imagem:'assets/noticias/5.jpg',
    url:'https://noticias.sapo.ao/sociedade/artigos/idai-angola-envia-missao-humanitaria-com-100-tecnicos-de-saude'
  },
  {
    titulo:'Presidente da República encoraja Polícia Nacional no combate à criminalidade',
    imagem:'assets/noticias/6.jpg',
    url:'https://noticias.sapo.ao/sociedade/artigos/presidente-da-republica-encoraja-policia-nacional-no-combate-a-criminalidade'
  },
  {
    titulo:'Grande Show Solidário Angola & Moçambique “Juntos pela mesma causa”',
    imagem:'assets/noticias/7.jpg',
    url:'https://www.instagram.com/p/BwSjthRhzpF/?utm_source=ig_share_sheet&igshid=19zxg2mkuy0ob'
  }
  // {
  //   titulo:'Tour Mobbers “SobPressão” by Jade!',
  //   imagem:'',
  //   url:'https://www.instagram.com/p/BuTh1WAgggZ/?utm_source=ig_share_sheet&igshid=3pbnbj9kjqc8'
  // },
  // {
  //   titulo:'Campanha solidária ZAP',
  //   imagem:'',
  //   url:'https://www.instagram.com/bwevip/p/BwCm_kCjU2p/?utm_source=ig_share_sheet&igshid=vxu2cdh4omwz'
  // },
  // {
  //   titulo:'Dia mundial do desenhista',
  //   imagem:'',
  //   url:'https://www.instagram.com/p/BwR1XW3FBzK/?utm_source=ig_share_sheet&igshid=gtgnydp9asri'
  // },
  // {
  //   titulo:'Angola vai receber as últimas 21 locomotivas da General Eletric (GE) em 2020',
  //   imagem:'',
  //   url:'https://www.instagram.com/p/BwHHgoyFwOI/?utm_source=ig_share_sheet&igshid=3sz4w1kyg20h'
  // },
  // {
  //   titulo:'Naice Zulu incentiva juventude angolana a lutar pelos seus objectivos',
  //   imagem:'',
  //   url:'https://bwevip.com/naice-zulu-incentiva-juventude-angolana-a-lutar/'
  // },
  // {
  //   titulo:'Puto Prata garante 45 vagas para cursos bancários aos jovens',
  //   imagem:'',
  //   url:'https://bwevip.com/puto-prata-garante-45-vagas-para-cursos-bancarios-aos-jovens/'
  // },
  // {
  //   titulo:'Projectos de micro-finanças podem acelerar o empreendedorismo no país',
  //   imagem:'',
  //   url:'https://noticias.sapo.ao/economia/artigos/projectos-de-micro-financas-podem-acelerar-o-empreendedorismo-no-pais'
  // },
  // {
  //   titulo:'Desalojados pelas chuvas beneficiam de doação do Minint',
  //   imagem:'',
  //   url:'http://m.portalangop.co.ao/angola/pt_pt/mobile/noticias/sociedade/2019/2/10/Desalojados-pelas-chuvas-beneficiam-doacao-Minint,13a30a26-ee70-42ab-bfc3-322ad1876623.html?version=mobile'
  // },
  // {
  //   titulo:'2.ª edição do torneio "Craques da Escola"',
  //   imagem:'',
  //   url:'https://www.verangola.net/va/pt/042019/eventos/14855/2%C2%AA-edi%C3%A7%C3%A3o-do-torneio-Craques-da-Escola-Desporto.htm'
  // },
  // {
  //   titulo:'Curso "Como Falar em Público e Fazer Apresentações"',
  //   imagem:'',
  //   url:'https://www.verangola.net/va/pt/042019/eventos/14823/Curso-Como-Falar-em-P%C3%BAblico-e-Fazer-Apresenta%C3%A7%C3%B5es-Workshops.htm'
  // },
  // {
  //   titulo:'ANGOTIC – Angola ICT Forum',
  //   imagem:'',
  //   url:'https://www.verangola.net/va/pt/122018/eventos/13803/ANGOTIC-%E2%80%93-Angola-ICT-Forum-Empresarial-Feiras.htm'
  // },
  // {
  //   titulo:'Café do Arquitecto: Propriedade Intelectual na Arquitectura',
  //   imagem:'',
  //   url:'https://www.verangola.net/va/pt/032019/eventos/14643/Caf%C3%A9-do-Arquitecto-Propriedade-Intelectual-na-Arquitectura-Empresarial.htm'
  // }
  ];
  p:number;
  noticiasC:any;

  ngOnInit() {
  	this.p=1;
    this.listarNoticias();
  }
  listarNoticias(){
    this.noticiasService.todasNoticias().subscribe(data => {
      // set items to json response
      this.noticiasC = data;
    });
  }
}
