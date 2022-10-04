import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Libro } from '../libro';
import { LibroService } from '../libro.service';
import { map, filter, tap } from 'rxjs/operators';
import { KeyValuePipe } from '@angular/common';
import { Observable, of, pipe, Observer } from 'rxjs';
import { PrestamoService } from '../prestamo.service';
import { Prestamo } from '../prestamo';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';




@Component({
  selector: 'app-prestamo',
  templateUrl: './prestamo.component.html',
  styleUrls: ['./prestamo.component.css']
})
export class PrestamoComponent implements OnInit {
  isbn:number;
  isbn1:string;
  libro = new Libro();
  datos: any = [];
  public mostrarporPantalla:any;
  reservas:any = [];
  prestamos:Prestamo[];
  prestamo: Prestamo = new Prestamo();
  usuario = new Usuario();
  idCliente:number;

  constructor(private libroServicio:LibroService, private router:Router, private prestamoServicio:PrestamoService,
    private usuarioServicio: UsuarioService) { 
    
  }

  ngOnInit(): void {
  }


  getInputValue(id:string){
    this.isbn1 = String(id);
    this.isbn = parseInt(this.isbn1);
    this.obtenerLibroporId();
    
    this.iraLibros();
    
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
        'estado': 2
      }
       
       this.actualizarLibro();
    });

    
    }


actualizarLibro(){
  this.libroServicio.actualizarLibro(this.isbn,this.libro).subscribe({ next: (dato) => console.log("Libro prestado"), error: (error) => console.log(error) });
}


iraLibros(){
  this.router.navigate(['/libros']);
  alert("El libro cuyo ISBN es: " + this.isbn  + " ha sido prestado");
}

obtenerPrestamos(){
  this.prestamoServicio.obtenerListaPrestamos().subscribe(dato =>{
    this.prestamos = dato;
  console.log(this.prestamo);
});
}

guardarPrestamo(){

  this.prestamoServicio.registrarPrestamo(this.prestamo).subscribe({ next: (dato) =>console.log(dato), error: (error) => console.log(error) });

}

onSubmit(){

  this.guardarPrestamo();
  console.log(this.prestamo);

}

obtenerUsuarioporId(){
  this.usuarioServicio.obtenerUsuarioporId(this.idCliente).subscribe(dato => {
    console.log(dato);
    this.datos = dato;
    console.log(this.datos);
    

   this.usuario = {
     
  'id': this.datos.id,
  'apellido': this.datos.apellido,
  'dni': this.datos.dni,
  'email': this.datos.email,
  'fechaNacimiento': this.datos.fechaNacimiento,
  'nombre': this.datos.nombre,
  'clave': this.datos.clave
   }

   return this.usuario;
    
  }, error => console.log(error));
}



}
