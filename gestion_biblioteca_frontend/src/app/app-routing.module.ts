import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LibrosComponent } from './libros/libros.component';
import { AddLibroComponent } from './add-libro/add-libro.component';
import { PrestamoComponent } from './prestamo/prestamo.component';
import { DevolucionComponent } from './devolucion/devolucion.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RegistroComponent } from './registro/registro.component';
import { ActualizarLibroComponent } from './actualizar-libro/actualizar-libro.component';
import { ReservarComponent } from './reservar/reservar.component';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';
import { ReportesComponent } from './reportes/reportes.component';
import { LibroPerdidoComponent } from './libro-perdido/libro-perdido.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'inicio', component: AppComponent},
  {path: 'login', component: LoginComponent},
  {path: 'libros', component: LibrosComponent},
  {path: 'agregarlibro', component: AddLibroComponent},
  {path:  'prestamo', component: PrestamoComponent},
  {path: 'devolucion', component: DevolucionComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'reservar/:isbn', component: ReservarComponent},
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'actualizarlibro/:isbn', component: ActualizarLibroComponent},
  {path: 'actualizarusuario/:id', component: ActualizarUsuarioComponent},
  {path: 'agregarusuario', component: AddUsuarioComponent},
  {path: 'reportes', component: ReportesComponent},
  {path: 'perdidas', component: LibroPerdidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
