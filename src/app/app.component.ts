import { Component} from '@angular/core';
import { filter } from 'rxjs/operators';
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
  	const navEndEvents = router.events.pipe(
      filter(
        event => event instanceof NavigationEnd
      )
    );
    navEndEvents.subscribe(
      (event: NavigationEnd) => {
        gtag('config', 'UA-143261260-1', {
          page_path: event.urlAfterRedirects,
        });
      }
    );
    /*this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });*/
  }
}
