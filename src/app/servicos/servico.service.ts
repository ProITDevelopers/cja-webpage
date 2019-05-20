import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Membro } from '../model/membro';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(private http:HttpClient) { }
  url="https://mediarumo.herokuapp.com/cja";
  urlNot="https://mediarumo.herokuapp.com/cja/noticia";
  urlParc="https://mediarumo.herokuapp.com/cja/parceiro";
  urlperg="https://mediarumo.herokuapp.com/cja/gergunta";

  headers = new HttpHeaders();
   
  cadastrar(membro:Membro):Observable<any>{
    return this.http.post(this.url,membro, { headers: this.headers });
  }
   //imagem
  public uploadImage(image: File,membro:Membro): Observable<any> {
    const formData = new FormData();

    formData.append('imagem', image,image.name);
    formData.append('nomeProprio', membro.nomeProprio);
    formData.append('apelido', membro.apelido);
    formData.append('dataNascimento', membro.dataNascimento);
    formData.append('email', membro.email);
    formData.append('rua', membro.rua);
    formData.append('cidade', membro.cidade);
    formData.append('telemovel', membro.telemovel);
    formData.append('bi', membro.bi);
    formData.append('genero', membro.genero);
    return this.http.post(this.url, formData);
  }
  todasNoticias():Observable<any>{
    return this.http.get(this.urlNot,{ headers: this.headers });
  }
  todosParceiros():Observable<any>{
    return this.http.get(this.urlParc,{ headers: this.headers });
  }
  todasPerguntas():Observable<any>{
    return this.http.get(this.urlperg,{ headers: this.headers });
  }
}
