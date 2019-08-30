import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Mensagem } from '../model/mensagem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {
  constructor(private http: HttpClient) {}

  url = 'https://mediarumo.herokuapp.com/cja/pergunta-email';
  // teste
  // oficial url = 'https://cartaojovemapp.proitappsolutions.com/cja/pergunta-email';
  // Alternativo url = 'https://7e37624c.ngrok.io/cja/pergunta-email';

  headers = new HttpHeaders();

  enviar(mensagem: Mensagem): Observable<any> {
    return this.http.post(this.url, mensagem, { headers: this.headers });
  }
}
