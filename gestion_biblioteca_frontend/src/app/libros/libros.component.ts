import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from '../libro';
import { LibroService } from '../libro.service';
import { Reserva } from '../reserva';
import { ReservaService } from '../reserva.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
 
  libros:Libro[];
  reserva:Reserva;
  libro: Libro = new Libro();
  isbn:number;
  resultado_libro:Object;
  resultado: string;
  datos:any;
  libro1 = new Libro();
  libro2 = new Libro();
  botonGrisado:boolean;
  dato: any = [];
  buscar:boolean;

  constructor(private libroServicio:LibroService, private router:Router, reservaServicio: ReservaService) { }

  ngOnInit(): void {
    this.obtenerLibros();
  }


 verificarLibroPrestado(){

 }


  private obtenerLibros(){
    this.libroServicio.obtenerListaLibros().subscribe(dato =>{
      this.libros = dato;
      this.datos = dato;
  console.log(this.datos);
});
  }

  actualizarLibro1(isbn:number){
    console.log(isbn);
    this.router.navigate(['actualizarlibro', isbn]);
  }

  eliminarLibro(isbn:number){
    
    this.libroServicio.eliminarLibro(isbn).subscribe(dato => {
      console.log(dato);
      this.obtenerLibros();
    });
  }

  abrirAddLibro(){
    this.router.navigate(['./agregarlibro']);
  }

  volveraLibros(){
    this.router.navigate(['./libro']);
  }


  reservarLibro(isbn:number){
    console.log(isbn);
    this.router.navigate(['./reservar', isbn]);
  }

  
  public getInputValue(inputValue:string){
    this.isbn = parseInt(inputValue);
    console.log(this.isbn);
    this.obtenerLibroporId();
    this.buscar = true;
  }

  obtenerLibroporId(){
    this.libroServicio.obtenerLibroporId(this.isbn).subscribe(dato => {
      this.dato = dato;
      console.log(this.dato);
      

      this.libro1 = {
       'isbn' : this.dato.isbn,
       'titulo': this.dato.titulo,
       'autor': this.dato.autor,
       'editorial': this.dato.editorial,
       'categoria': this.dato.categoria,
       'fechaPublicacion': this.dato.fechaPublicacion,
       'estado': 1
     }


      
    }, error => console.log(error));
}



}

