import { Component, OnInit } from '@angular/core';
import { GoogleAnaliticsService } from '../servicos/google-analitics.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private gaService:GoogleAnaliticsService) { }

  ngOnInit() {
  }

  submitEvent(label:string) {
    this.gaService.emitEvent("RedeSocial", "Click", label, 10);
  }
}
