import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from '../libro';
import { LibroService } from '../libro.service';

@Component({
  selector: 'app-add-libro',
  templateUrl: './add-libro.component.html',
  styleUrls: ['./add-libro.component.css']
})
export class AddLibroComponent implements OnInit {

  libro: Libro = new Libro();

  constructor(private router:Router, private libroservicio: LibroService) { }

  ngOnInit(): void {
  }

  guardarLibro(){
    this.libroservicio.registrarLibro(this.libro).subscribe(dato=>{
      console.log(dato);
      this.volverLibros();
    }, error => console.log(error));

  }

  volverLibros(){
    this.router.navigate(['./libros']);
  }

  onSubmit(){
    this.guardarLibro();
    console.log(this.libro);
  }



}
