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
    
    'assets/logos/Logo_xyami.png',
    'assets/logos/LOGO_BNI_WIRED.png',
    'assets/logos/movicel.png',
    'assets/logos/CEOA_LOGO_MASTER.png',
    'assets/logos/Logo_mecofarma_aobaixo.png',
    'assets/logos/Logotipo_JAL_Travel_Graphix_2017-04.png',
    'assets/logos/SAPO_FV_Pol_P_RGB.png',
    'assets/logos/Logotipo ENSA.png',
    'assets/logos/Logo_Cinemax_black-02.png',
    'assets/logos/kero.png'
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
