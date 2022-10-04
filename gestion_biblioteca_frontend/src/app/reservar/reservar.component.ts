import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';
import { LibroService } from '../libro.service';
import { Reserva } from '../reserva';
import { ReservaService } from '../reserva.service';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent implements OnInit {

  reserva:Reserva = new Reserva;
  isbn: number;
  dias = 15;
  datos: any = [];
  libro = new Libro();

  constructor(private router:Router,private route:ActivatedRoute, private reservaServicio: ReservaService, private libroServicio: LibroService) { }

  ngOnInit(): void {
    
  }

  volveraHome(){
    this.router.navigate(['./home']);
  }


onSubmit(){
  this.isbn = this.route.snapshot.params['isbn'];
  this.reserva.id_libro = this.isbn;
  console.log(this.reserva);
  this.obtenerLibroporId();
  this.registrarReservas()

  alert("Libro reservado con èxito");
  
}

registrarReservas(){
  this.reservaServicio.registrarReserva(this.reserva).subscribe({next: (dato) =>this.volveraHome(), error: (error) => console.log(error) });
}


obtenerLibroporId(){

  this.libroServicio.obtenerLibroporId(this.isbn).subscribe(data => {
     this.datos = data;
     console.log(this.datos);
     

     this.libro = this.libro = {
      'isbn' : this.isbn,
      'titulo': this.datos.titulo,
      'autor': this.datos.autor,
      'editorial': this.datos.editorial,
      'categoria': this.datos.categoria,
      'fechaPublicacion': this.datos.fechaPublicacion,
      'estado': 1
    }
     
     this.actualizarLibro();
  });

  
  }


actualizarLibro(){
this.libroServicio.actualizarLibro(this.isbn,this.libro).subscribe({ next: (dato) => console.log("Libro prestado"), error: (error) => console.log(error) });
}


}
