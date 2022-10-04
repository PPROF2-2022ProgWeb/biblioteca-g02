import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from '../libro';
import { LibroService } from '../libro.service';

@Component({
  selector: 'app-devolucion',
  templateUrl: './devolucion.component.html',
  styleUrls: ['./devolucion.component.css']
})
export class DevolucionComponent implements OnInit {

  isbn: number;
  libro = new Libro();
  datos: any = [];

  constructor(private libroServicio:LibroService, private router:Router) { }

  ngOnInit(): void {
  }

  devolver(id:string){
    this.isbn = parseInt(id);
    this.obtenerLibroporId();
    this.iraLibros();
    
  }

  obtenerLibroporId(){
    this.libroServicio.obtenerLibroporId(this.isbn).subscribe(data => {
       this.datos = data;
       this.libro = {
        'isbn' : this.isbn,
        'titulo': this.datos.titulo,
        'autor': this.datos.autor,
        'editorial': this.datos.editorial,
        'categoria': this.datos.categoria,
        'fechaPublicacion': this.datos.fechaPublicacion,
        'estado': 0
      }
      console.log(this.libro);
       this.actualizarLibro();
    });

    
    }


actualizarLibro(){
  this.libroServicio.actualizarLibro(this.isbn,this.libro).subscribe({ next: (dato) => console.log("Libro devuelto"), error: (error) => console.log(error) });
}


iraLibros(){
  this.router.navigate(['/libros']);
  alert("El libro cuyo ISBN es: " + this.isbn  + " ha sido devuelto");
}





}
