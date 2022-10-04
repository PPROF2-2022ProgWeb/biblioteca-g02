import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';
import { LibroService } from '../libro.service';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-actualizar-libro',
  templateUrl: './actualizar-libro.component.html',
  styleUrls: ['./actualizar-libro.component.css']
})
export class ActualizarLibroComponent implements OnInit {


  isbn:number;
  libro:Libro = new Libro();


  constructor(private libroServicio:LibroService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.isbn = this.route.snapshot.params['isbn'];
    this.libroServicio.obtenerLibroporId(this.isbn).subscribe({next: (dato) => dato = this.libro, error: (error) => console.log(error) });
    
  }

  iraLibros(){
    this.router.navigate(['/libros']);
    alert("Libro actualizado con exito");
  }

  
  iraLibro(){
    this.router.navigate(['/libros']);
    
  }


  onSubmit(){
    
    this.libroServicio.actualizarLibro(this.isbn,this.libro).subscribe({next: (dato) => this.iraLibros(), error: (error) => console.log(error) });
  
  }

  

}
