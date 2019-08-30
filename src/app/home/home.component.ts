import { Component, OnInit, ViewChild } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';
import { ServicoService } from '../servicos/servico.service';
import { GoogleAnaliticsService } from '../servicos/google-analitics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private parceirosService: ServicoService,
    private gaService: GoogleAnaliticsService
  ) {}
  @ViewChild('owlElement') owlElement: OwlCarousel;
  imagesP: any;
  images = [
    {
      entidade: 'zap cinema',
      url: 'assets/logos/LOGO-ZAP-CINEMAS.png',
      site: 'https://www.centroopticoangola.com/'
    },
    {
      entidade: 'centro optico',
      url: 'assets/logos/CEOA_LOGO_MASTER.png',
      site: 'https://www.centroopticoangola.com/'
    },
    {
      entidade: 'Mecofarma',
      url: 'assets/logos/Logo_mecofarma_aobaixo.png',
      site: 'http://www.mecofarma.com'
    },
    {
      entidade: 'Jaltravel',
      url: 'assets/logos/Logotipo_JAL_Travel_Graphix_2017-04.png',
      site: 'https://www.jaltravel.co.ao'
    },
    {
      entidade: 'Sapo',
      url: 'assets/logos/SAPO_FV_Pol_P_RGB.png',
      site: 'https://www.sapo.ao'
    },
    {
      entidade: 'Ensa',
      url: 'assets/logos/Logotipo ENSA.png',
      site: 'https://www.ensa.co.ao'
    },
    {
      entidade: 'Zahara',
      url: 'assets/logos/zahara.png',
      site: 'http://zahara.xyami.co.ao'
    },
    {
      entidade: 'Kero',
      url: 'assets/logos/kero1.png',
      site: 'http://www.kero.co.ao/'
    },
    {
      entidade: 'Tupuca',
      url: 'assets/logos/tupuca.png',
      site: 'https://tupuca.com'
    },
    {
      entidade: 'Cinemax',
      url: 'assets/logos/Logo_Cinemax_black-02.png',
      site: 'http://www.cinemax.co.ao/'
    },
    {
      entidade: 'Leverage',
      url: 'assets/logos/Leverage.png',
      site: 'https://www.leverage.co.ao/PT'
    },
    {
      entidade: 'Tleva',
      url: 'assets/logos/tleva.png',
      site: '#'
    },
    {
      entidade: 'Rock Burger',
      url: 'assets/logos/RRJW1351.png',
      site: '#'
    },
    {
      entidade: 'CLÉ ENTERTAINMENT',
      url: 'assets/logos/CLÉ ENTERTAINMENT-01.png',
      site: 'https://www.cleentertainment.co.ao/'
    },
    {
      entidade: 'Conexão',
      url: 'assets/logos/Conexão.png',
      site: '#'
    },
    {
      entidade: 'Farmácias de Angola',
      url: 'assets/logos/Farmácias de Angola.png',
      site: '#'
    },
    {
      entidade: 'Mo',
      url: 'assets/logos/Mo.png',
      site: '#'
    },
    {
      entidade: 'Sportzone',
      url: 'assets/logos/Sportzone.png',
      site: '#'
    },
    {
      entidade: 'Springfield',
      url: 'assets/logos/Springfield.png',
      site: '#'
    },
    {
      entidade: 'Swatch+',
      url: 'assets/logos/Swatch+.png',
      site: '#'
    },
    {
      entidade: 'Top Brands Angola',
      url: 'assets/logos/TBA.png',
      site: '#'
    },
    {
      entidade: 'Womens´Secret',
      url: 'assets/logos/Womens´Secret.png',
      site: '#'
    },
    {
      entidade: 'Worten',
      url: 'assets/logos/Worten.png',
      site: '#'
    },
    {
      entidade: 'NCR',
      url: 'assets/logos/NCR.png',
      site: 'https://www.ncrangola.com'
    },
    {
      entidade: 'CocaCola',
      url: 'assets/logos/Coca-Cola-Logo-PNG-768x361.png',
      site: '#'
    },
    {
      entidade: 'Banco Keve',
      url: 'assets/logos/Logotipo com Assinatura  Keve-01.png',
      site: 'https://www.bancokeve.ao'
    },
    {
      entidade: 'Tv cabo angola',
      url: 'assets/logos/Tv cabo angola logo.png',
      site: 'https://www.tvcabo.ao'
    },
    {
      entidade: 'Jobartis',
      url: 'assets/logos/Jobartis-Color-300x100.png',
      site: 'https://www.jobartis.com'
    },
    {
      entidade: 'Green touch',
      url: 'assets/logos/Green touch logo-01.png',
      site: '#'
    }
  ];

  carouselOptions = {
    margin: 25,
    loop: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 3
        // nav: true
      },
      480: {
        items: 4
        // nav: true
      },
      768: {
        items: 5,
        // nav: true,
        loop: false
      },
      1000: {
        items: 6,
        // nav: true,
        loop: false
      }
    }
  };

  ngOnInit() {

  }

  submitEventVideo() {
    this.gaService.emitEvent('Video', 'play', 'Promo Video', 10);
  }
}
