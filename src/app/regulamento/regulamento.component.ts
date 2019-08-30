import { Component, OnInit } from '@angular/core';
import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';
@Component({
  selector: 'app-regulamento',
  providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  templateUrl: './regulamento.component.html',
  styleUrls: ['./regulamento.component.css']
})
export class RegulamentoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
