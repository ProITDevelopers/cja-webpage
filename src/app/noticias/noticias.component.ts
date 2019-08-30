import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../servicos/servico.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  constructor(private noticiasService: ServicoService) {}

  p: number;
  noticiasC: any;

  ngOnInit() {
    this.p = 1;
    this.listarNoticias();
  }
  listarNoticias() {
    this.noticiasService.todasNoticias().subscribe(data => {
      // set items to json response
      this.noticiasC = data;
    });
  }
}
