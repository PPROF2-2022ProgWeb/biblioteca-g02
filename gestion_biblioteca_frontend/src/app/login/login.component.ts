import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BibliotecarioService } from '../bibliotecario.service';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id: any;
  clave1:any;
  datos:any;
  datos1:any;
  ingresook:boolean = false;
  ingresook1:boolean = false;
  usuario = new Usuario();
  usuario1 = new Usuario();

  constructor(private router:Router, private usuarioServicio:UsuarioService,private bibliotecarioServicio:BibliotecarioService ) { }

  ngOnInit(): void {
  }

  abrirRegistro(){
    this.router.navigate(['./registro']);
  }

  ingresar(id:string, clave:string){
    this.id = parseInt(id);
    this.clave1 = clave;
    console.log(this.id, this.clave1);

    this.obtenerUsuario();
    this.obtenerBibliotecario();
    
  }


 obtenerBibliotecario(){
  
  this.bibliotecarioServicio.obtenerBibliotecarioporId(this.id).subscribe(dato => {
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
        
       

       if(this.datos != null){
        if(this.usuario.clave = this.clave1){
          this.ingresook = true;
          console.log("iniciaste sesion");
          
        }else{
          this.ingresook = false;
        }
       }
 });
}

obtenerUsuario(){
  this.usuarioServicio.obtenerUsuarioporId(this.id).subscribe(dato => {
    this.datos1 = dato;
    console.log(this.datos1);  

    this.usuario1 = {
      'id': this.datos1.id,
      'apellido': this.datos1.apellido,
      'dni': this.datos1.dni,
      'email': this.datos1.email,
      'fechaNacimiento': this.datos1.fechaNacimiento,
      'nombre': this.datos1.nombre,
      'clave': this.datos1.clave
       }
   
       if(this.datos1 != null){
        if(this.usuario1.clave = this.clave1){
          this.ingresook1 = true;
          console.log("iniciaste sesion");
        }else{
          this.ingresook1 = false;
        }
       }
});



}
}