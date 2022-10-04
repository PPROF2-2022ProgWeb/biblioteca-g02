import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibroPerdido } from '../libro-perdido';
import { LibroPerdidoService } from '../libro-perdido.service';
import { Prestamo } from '../prestamo';
import { PrestamoService } from '../prestamo.service';
import { Reserva } from '../reserva';
import { ReservaService } from '../reserva.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  

  prestamos:Prestamo[];
  reservas:Reserva[];
  librosPerdidos:LibroPerdido[];
  datos:any;



  constructor(private prestamoServicio:PrestamoService, private reservaServicio:ReservaService,private router:Router,
    private libroperdidoServicio: LibroPerdidoService) { }

  ngOnInit(): void {
    this.obtenerPrestamos();
    this.obtenerReservas();
    this.obtenerLibrosPerdidos();

  }

  obtenerPrestamos(){
    this.prestamoServicio.obtenerListaPrestamos().subscribe(dato =>{
      this.prestamos = dato;
      this.datos = dato;
});
  }

  obtenerReservas(){
    this.reservaServicio.obtenerListaReservas().subscribe(dato =>{
      this.reservas = dato;
    console.log(this.reservas);
  });
  }

  enviaraLibroPerdido(){
    this.router.navigate(['./perdidas']);
  }


  obtenerLibrosPerdidos(){
    this.libroperdidoServicio.obtenerListaLibrosPerdidos().subscribe(dato =>{
      this.librosPerdidos = dato;
    console.log(this.librosPerdidos);
   
  
  });
  }
}
