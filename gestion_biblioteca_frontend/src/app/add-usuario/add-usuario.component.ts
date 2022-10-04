import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {
  usuario: Usuario = new Usuario();

  constructor(private router:Router, private usuarioservicio: UsuarioService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.usuario);
   this.usuarioservicio.registrarUsuario(this.usuario).subscribe({next: (dato) => this.volveraUsuarios(), error: (error) => console.log(error) });
  }

  volveraUsuarios(){
    this.router.navigate(['./usuarios']);
    alert("Usuario guardado con èxito");
  }
}
