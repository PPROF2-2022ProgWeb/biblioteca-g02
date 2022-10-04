import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibroPerdido } from '../libro-perdido';
import { LibroPerdidoService } from '../libro-perdido.service';

@Component({
  selector: 'app-libro-perdido',
  templateUrl: './libro-perdido.component.html',
  styleUrls: ['./libro-perdido.component.css']
})
export class LibroPerdidoComponent implements OnInit {

  libroPerdido: LibroPerdido = new LibroPerdido();

  constructor(private router:Router, private libroPerdidoservicio: LibroPerdidoService) { }

  ngOnInit(): void {
  }

  guardarLibroPerdido(){
    this.libroPerdidoservicio.registrarLibroPerdido(this.libroPerdido).subscribe({next: (dato) => this.volverReportes(), error: (error) => console.log(error) });

  }

  volverReportes(){
    this.router.navigate(['./reportes']);
    alert("Libro perdido " + this.libroPerdido.isbn +" registrado");
  }

  onSubmit(){
    this.guardarLibroPerdido();
    console.log(this.libroPerdido);
  }


}
