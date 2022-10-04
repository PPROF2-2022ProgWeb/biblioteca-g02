import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prestamo } from './prestamo';


@Injectable({
  providedIn: 'root'
})
export class PrestamoService {
//Esta url obtiene la lista de usuarios del backend
private baseURL = "http://localhost:8080/api/v1/prestamo";

constructor(private httpClient : HttpClient) { }


obtenerListaPrestamos():Observable<Prestamo[]>{
  return this.httpClient.get<Prestamo[]>(`${this.baseURL}`);
}

registrarPrestamo(prestamo: Prestamo): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`, prestamo);
 }

 actualizarPrestamo(id: number, prestamo:Prestamo): Observable<Object>{
   return this.httpClient.put(`${this.baseURL}/${id}`, prestamo);
 }

 obtenerPrestamoporId(id:number): Observable<Object>{
   return this.httpClient.get<Prestamo>(`${this.baseURL}/${id}`);

 }


 eliminarPrestamo(id: number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}

}
