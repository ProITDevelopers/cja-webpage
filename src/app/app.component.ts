import { Component} from '@angular/core';
import { filter } from 'rxjs/operators';
import { environment} from './../environments/environment';
declare var gtag;
declare var ga;

import { Router,NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cja';
  constructor(private router: Router) {

  	const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + environment.code;
    document.head.prepend(script);﻿
  	const navEndEvents = router.events.pipe(
      filter(
        event => event instanceof NavigationEnd
      )
    );
    navEndEvents.subscribe(
      (event: NavigationEnd) => {
        gtag('config', environment.code, {
          page_path: event.urlAfterRedirects,
        });
      }
    );
    /*this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });*/
  }
}
