import { Component, OnInit,ViewChild } from '@angular/core';
import {OwlCarousel} from 'ngx-owl-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @ViewChild('owlElement') owlElement: OwlCarousel;
  images = [
    {
      src:'assets/logos/Logo_xyami.png',
      site:'https://www.xyami.co.ao'
    },
    {
      src:'assets/logos/LOGO_BNI_WIRED.png',
      site:'https://www.bni.ao'
    },
    {
      src:'assets/logos/CEOA_LOGO_MASTER.png',
      site:'https://www.centroopticoangola.com/'
    },
    {
      src:'assets/logos/Logo_mecofarma_aobaixo.png',
      site:'https://www.mecofarma.com'
    },
    {
      src:'assets/logos/Logotipo_JAL_Travel_Graphix_2017-04.png',
      site:'https://www.jaltravel.co.ao'
    },
    {
      src:'assets/logos/SAPO_FV_Pol_P_RGB.png',
      site:'https://www.sapo.ao'
    },
    {
      src:'assets/logos/Logotipo ENSA.png',
      site:'https://www.ensa.co.ao'
    },
    {
      src:'assets/logos/zahara.png',
      site:'https://zahara.xyami.co.ao'
    },
    {
      src:'assets/logos/kero1.png',
      site:'https//:http://www.kero.co.ao/'
    },
    {
      src:'assets/logos/Logo_Cinemax_black-02.png',
      site:'https://www.cinemax.co.ao/'
    },
    
    
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
}
