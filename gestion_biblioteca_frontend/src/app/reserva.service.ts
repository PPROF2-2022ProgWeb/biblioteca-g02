import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva } from './reserva';
import { Libro } from './libro';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
 //Esta url obtiene la lista de usuarios del backend
 private baseURL = "http://localhost:8080/api/v1/reservas";

 constructor(private httpClient : HttpClient) { }


 registrarReserva(reserva:Reserva): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`, reserva);
 }

 obtenerListaReservas():Observable<Reserva[]>{
  return this.httpClient.get<Reserva[]>(`${this.baseURL}`);
}


 
}


