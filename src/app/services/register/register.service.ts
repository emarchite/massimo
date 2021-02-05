import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// JSON
import usersList from 'src/assets/json/users.json';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  // Utilizo una API de pruebas
  urlApi: string = 'https://reqres.in/';


  constructor(private http: HttpClient) {}

  addUser(user): Observable<any> {

    // return usersList.push(user);

    const httpHeaders = new HttpHeaders({'Authorization': 'none', 'Access-Control-Allow-Origin': '*'});
    const options = { headers: httpHeaders };

    // TODO: nos devolveria un token (creariamos una clase para su manejo) de authentificacion codificado por varias posibles opciones: JWT O AES
    const body = { email: "eve.holt@reqres.in", password: "pistol"  }; // OPCION QUE NOS DARA UN 200 -> OK
    // const body = { email: user.email, password: user.password  };  // OPCION QUE NOS DARA UN 400 -> NOK
    return this.http.post<any>(this.urlApi + 'api/register', body, options);

  }
}