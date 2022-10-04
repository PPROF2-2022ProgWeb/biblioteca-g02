import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //Esta url obtiene la lista de usuarios del backend
  private baseURL = "http://localhost:8080/api/v1/usuariosreg";

  constructor(private httpClient : HttpClient) { }

  //este metodo sirve para obtener los usuarios 
  obtenerListaUsuarios():Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.baseURL}`)
  }

  registrarUsuario(usuario: Usuario): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, usuario);
   }

   obtenerUsuarioporId(id:number): Observable<Object>{
    return this.httpClient.get<Usuario>(`${this.baseURL}/${id}`);

  }

  
  actualizarUsuario(id: number, usuario:Usuario): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, usuario);
  }
 
  eliminarUsuario(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
