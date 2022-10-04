import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LibroPerdido } from './libro-perdido';

@Injectable({
  providedIn: 'root'
})
export class LibroPerdidoService {

    //Esta url obtiene la lista de usuarios del backend
    private baseURL = "http://localhost:8080/api/v1/perdidas";

    constructor(private httpClient : HttpClient) { }
  
    //este metodo sirve para obtener los usuarios 
    obtenerListaLibrosPerdidos():Observable<LibroPerdido[]>{
      return this.httpClient.get<LibroPerdido[]>(`${this.baseURL}`);
    }
  
  
    registrarLibroPerdido(libroperdido: LibroPerdido): Observable<Object>{
     return this.httpClient.post(`${this.baseURL}`, libroperdido);
    }
  
}
