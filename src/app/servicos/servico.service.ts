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
   //url1="https://mediarumos.herokuapp.com/subscricao";teste

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
    //formData.append('password', 'hhhj');
    return this.http.post(this.url, formData);
   }
}