import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Membro } from '../model/membro';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(private http:HttpClient) { }
   url="https://mediarumos.herokuapp.com/cja";
   headers = new HttpHeaders();
   
   cadastrar(membro:Membro):Observable<any>{
    return this.http.post(this.url,membro, { headers: this.headers });
   }
}
