import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from './libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  
  //Esta url obtiene la lista de usuarios del backend
  private baseURL = "http://localhost:8080/api/v1/libros";

  constructor(private httpClient : HttpClient) { }

  //este metodo sirve para obtener los usuarios 
  obtenerListaLibros():Observable<Libro[]>{
    return this.httpClient.get<Libro[]>(`${this.baseURL}`);
  }


  registrarLibro(libro: Libro): Observable<Object>{
   return this.httpClient.post(`${this.baseURL}`, libro);
  }

  actualizarLibro(isbn: number, libro:Libro): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${isbn}`, libro);
  }

  obtenerLibroporId(isbn:number): Observable<Object>{
    return this.httpClient.get<Libro>(`${this.baseURL}/${isbn}`);

  }


  eliminarLibro(isbn: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${isbn}`);
  }
}
