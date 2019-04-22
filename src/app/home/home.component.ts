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
    'assets/logos/Logo_Cinemax_black-02.png',
    'assets/logos/Logo_xyami.png',
    'assets/logos/LOGO_BNI_WIRED.png',
    'assets/logos/kero.png',
    'assets/logos/movicel.png',
    'assets/logos/CEOA_LOGO_MASTER.png',
    'assets/logos/Logo_mecofarma_aobaixo.png',
    'assets/logos/Logotipo_JAL_Travel_Graphix_2017-04.png',
    'assets/logos/SAPO_FV_Pol_P_RGB.png'
  ];
  carouselOptions = {
    margin: 25,
    loop:true,
    dots:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2,
        nav: true
      },
      1000: {
        items: 5,
        nav: true,
        loop: false
      },
      1500: {
        items: 5,
        nav: true,
        loop: false
      }
    }
  }
}
