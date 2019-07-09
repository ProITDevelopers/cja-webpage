import { Component, OnInit,ViewChild } from '@angular/core';
import {OwlCarousel} from 'ngx-owl-carousel';
import { ServicoService} from '../servicos/servico.service';
import { GoogleAnaliticsService } from '../servicos/google-analitics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private parceirosService:ServicoService,
              private gaService:GoogleAnaliticsService) { }

  ngOnInit() {
    //this.listarParceiros();
    //this.submitEventVideo();
  }
  @ViewChild('owlElement') owlElement: OwlCarousel;
  imagesP:any;
  images = [
    {  
      entidade:'Xyami',
      url:'assets/logos/Logo_xyami.png',
      site:'http://www.xyami.co.ao'
    },
    {
      entidade:'centro optico',
      url:'assets/logos/CEOA_LOGO_MASTER.png',
      site:'https://www.centroopticoangola.com/'
    },
    {
      entidade:'Mecofarma',
      url:'assets/logos/Logo_mecofarma_aobaixo.png',
      site:'http://www.mecofarma.com'
    },
    {
      entidade:'Jaltravel',
      url:'assets/logos/Logotipo_JAL_Travel_Graphix_2017-04.png',
      site:'https://www.jaltravel.co.ao'
    },
    {
      entidade:'Sapo',
      url:'assets/logos/SAPO_FV_Pol_P_RGB.png',
      site:'https://www.sapo.ao'
    },
    {
      entidade:'Ensa',
      url:'assets/logos/Logotipo ENSA.png',
      site:'https://www.ensa.co.ao'
    },
    {
      entidade:'Zahara',
      url:'assets/logos/zahara.png',
      site:'http://zahara.xyami.co.ao'
    },
    {
      entidade:'Bonws Seguros',
      url:'assets/logos/Bonws Seguros.png',
      site:'#'
    },
    {
      entidade:'Kero',
      url:'assets/logos/kero1.png',
      site:'http://www.kero.co.ao/'
    },
    {
      entidade:'Tupuca',
      url:'assets/logos/tupuca.jpg',
      site:'https://tupuca.com'
    },
    {
      entidade:'Cinemax',
      url:'assets/logos/Logo_Cinemax_black-02.png',
      site:'http://www.cinemax.co.ao/'
    },
    {
      entidade:'Instituto Angolano da Juventude',
      url:'assets/logos/Instituto Angolano da Juventude.jpg',
      site:'#'
    },
    {
      entidade:'Leverage',
      url:'assets/logos/Leverage.png',
      site:'#'
    },
    {
      entidade:'Tleva',
      url:'assets/logos/tleva.png',
      site:'#'
    },
    {
      entidade:'Rock Burger',
      url:'assets/logos/RRJW1351.JPG',
      site:'#'
    },
    {
      entidade:'CLÉ ENTERTAINMENT',
      url:'assets/logos/CLÉ ENTERTAINMENT-01.jpg',
      site:'https://www.cleentertainment.co.ao/'
    },
    {
      entidade:'Conexão',
      url:'assets/logos/Conexão.jpg',
      site:'#'
    },
    {
      entidade:'Farmácias de Angola',
      url:'assets/logos/Farmácias de Angola.jpg',
      site:'#'
    },
    {
      entidade:'Mo',
      url:'assets/logos/Mo.jpg',
      site:'#'
    },
    {
      entidade:'Sportzone',
      url:'assets/logos/Sportzone.jpg',
      site:'#'
    },
    {
      entidade:'Springfield',
      url:'assets/logos/Springfield.jpg',
      site:'#'
    },
    {
      entidade:'Swatch+',
      url:'assets/logos/Swatch+.jpg',
      site:'#'
    },
    {
      entidade:'Top Brands Angola',
      url:'assets/logos/TBA.JPG',
      site:'#'
    },
    {
      entidade:'Womens´Secret',
      url:'assets/logos/Womens´Secret.jpg',
      site:'#'
    },
    {
      entidade:'Worten',
      url:'assets/logos/Worten.jpg',
      site:'#'
    },
    {
      entidade:'NCR',
      url:'assets/logos/NCR.jpg',
      site:'#'
    },
    {
      entidade:'Nossa Seguros',
      url:'assets/logos/logo_nossa-seguros-01.png',
      site:'#'
    },
    {
      entidade:'CocaCola',
      url:'assets/logos/Coca-Cola-Logo-PNG-768x361.png',
      site:'#'
    },
    {
      entidade:'Banco Keve',
      url:'assets/logos/Logotipo com Assinatura  Keve-01.png',
      site:'#'
    },
    {
      entidade:'Tv cabo angola',
      url:'assets/logos/Tv cabo angola logo.png',
      site:'#'
    },
    {
      entidade:'Jobartis',
      url:'assets/logos/Jobartis-Color-300x100.png',
      site:'#'
    },
    {
      entidade:'Governo de Angola',
      url:'assets/logos/governo-de-angola-logo.png',
      site:'#'
    },
    {
      entidade:'Green touch',
      url:'assets/logos/Green touch logo-01.png',
      site:'#'
    }
  ];
  carouselOptions = {
    margin: 25,
    loop:true,
    dots:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    //autoHeight: false,
    //autoHeightClass: 'owl-height',
    //nav: true,
    //navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 3,
        //nav: true
      },
      480: {
        items: 4,
        //nav: true
      },
      768: {
        items: 5,
        //nav: true,
        loop: false
      },
      1000: {
        items: 6,
        //nav: true,
        loop: false
      }
    }
  }
  listarParceiros(){
    this.parceirosService.todosParceiros().subscribe(data => {
      // set items to json response
      this.imagesP = data;
    });
  }
  submitEventVideo() {
    /*const video=document.getElementById("promovideo");
    video.onplaying = function() {
      alert("The video is now playing");
    };  */
    this.gaService.emitEvent("Video", "play", "Promo Video", 10);
  }
}
