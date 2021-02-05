import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usuario: string;
  password: string;
  urlApi: string = 'http://localhost:4200/';


  constructor(private http: HttpClient) {}

  getLogin(): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: httpHeaders };
    return this.http.get<any>(this.urlApi + 'assets/json/users.json', options);
    // TODO: En caso de que el ENDPOINT fuera una API hariamos la call por POST enviandole 2 parametros
    // TODO: nos devolveria un token (creariamos una clase para su manejo) de authentificacion codificado por varias posibles opciones: JWT O AES
    // const body = { usuario: u, password: p };
    // return this.http.post<Token>(this.urlApi + 'assets/json/users.json', body, options);
  }

}
