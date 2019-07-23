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
  urlCidade="https://cidade.herokuapp.com";

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
    formData.append('provincia', membro.provincia);
    formData.append('municipio', membro.municipio);
    formData.append('telemovel', membro.telemovel);
    formData.append('bi', membro.bi);
    formData.append('genero', membro.genero);
    return this.http.post(this.url, formData);
  }
  todasNoticias():Observable<any>{
    return this.http.get(`${this.url}/noticia`,{ headers: this.headers });
  }
  todosParceiros():Observable<any>{
    return this.http.get(`${this.url}/parceiro`,{ headers: this.headers });
  }
  todasPerguntas():Observable<any>{
    return this.http.get(`${this.url}/pergunta`,{ headers: this.headers });
  }
  cidades():Observable<any>{
    return this.http.get(`${this.urlCidade}/region`);
   }
   //municipios
   municipios(regiao):Observable<any>{
     return this.http.get(`${this.urlCidade}/city=${regiao}`);
   }
}
