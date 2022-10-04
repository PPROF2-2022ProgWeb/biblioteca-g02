import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bibliotecario } from './bibliotecario';

@Injectable({
  providedIn: 'root'
})
export class BibliotecarioService {

  //Esta url obtiene la lista de usuarios del backend
  private baseURL = "http://localhost:8080/api/v1/bibliotecarios";

  constructor(private httpClient : HttpClient) { }

  //este metodo sirve para obtener los usuarios 
  obtenerListaBibliotecarios():Observable<Bibliotecario[]>{
    return this.httpClient.get<Bibliotecario[]>(`${this.baseURL}`)
  }

   obtenerBibliotecarioporId(id:number): Observable<Object>{
    return this.httpClient.get<Bibliotecario>(`${this.baseURL}/${id}`);

  }
}
