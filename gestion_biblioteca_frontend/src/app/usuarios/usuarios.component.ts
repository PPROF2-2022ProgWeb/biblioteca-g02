import { Component, OnInit } from '@angular/core';
import { Router, RouteReuseStrategy } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { Libro } from '../libro';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios:Usuario[];
  dni:number;
  resultado_usuario: Object;
  datos: any = [];
  usuario = new Usuario();
  mostrar:boolean;


  constructor(private usuarioServicio:UsuarioService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }


  private obtenerUsuarios(){
    this.usuarioServicio.obtenerListaUsuarios().subscribe(dato =>{
      this.usuarios = dato;
    })
  }


  public getInputValue(dni:string){
    this.dni = parseFloat(dni);
    console.log(this.dni);
    this.obtenerUsuarioporId();
    this.mostrar = true;
  }

  obtenerUsuarioporId(){
    this.usuarioServicio.obtenerUsuarioporId(this.dni).subscribe(dato => {
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
      
    }, error => console.log(error));
}

actualizarUsuario(id:number){
  console.log(id);
  this.router.navigate(['actualizarusuario', id]);
}

eliminarUsuario(id:number){
  this.usuarioServicio.eliminarUsuario(id).subscribe(dato => {
    console.log(dato);
   alert("El usuario  ha sido eliminado");
  });
}

agregarUsuario(){
  this.router.navigate(['agregarusuario']);
}


}


