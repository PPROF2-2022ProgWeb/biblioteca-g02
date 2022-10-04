import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {
  usuario: Usuario = new Usuario();
  id:number;
  constructor(private router:Router, private usuarioservicio: UsuarioService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
  }

  volveraUsuarios(){
    this.router.navigate(['./usuarios']);
  }


  onSubmit(){
    console.log(this.usuario);
    this.actualizarUsuario();
  }

 actualizarUsuario(){
  this.usuarioservicio.actualizarUsuario(this.id,this.usuario).subscribe({next: (dato) => this.iraUsuarios(), error: (error) => console.log(error) });
 }

 iraUsuarios(){
  this.router.navigate(['/usuarios']);
  alert("Usuario actualizado con exito");
 }


}
