import { Injectable } from '@angular/core';
declare let gtag:Function;
@Injectable({
  providedIn: 'root'
})
export class GoogleAnaliticsService {

  constructor() { }
  public emitEvent(eventCategory: string,
                   eventAction: string,
                   eventLabel: string = null,
                   eventValue: number = null) {
    gtag('event',eventAction, {
      'event_category': eventCategory,
      'event_label': eventLabel,
      'value': eventValue
    });
  }
}
