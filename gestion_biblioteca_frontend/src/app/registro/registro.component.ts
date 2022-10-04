import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  usuario: Usuario = new Usuario();

  constructor(private router:Router, private usuarioservicio: UsuarioService) { }

  ngOnInit(): void {

  }

  abrirLogin(){
    this.router.navigate(['./login']);
  }

  volveraHome(){
    this.router.navigate(['./home']);
  }


  onSubmit(){
    console.log(this.usuario);
   this.usuarioservicio.registrarUsuario(this.usuario).subscribe({next: (dato) => this.volveraHome(), error: (error) => console.log(error) });
  }
}
