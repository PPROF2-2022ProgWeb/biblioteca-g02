import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { LibrosComponent } from './libros/libros.component';
import { AddLibroComponent } from './add-libro/add-libro.component';
import { PrestamoComponent } from './prestamo/prestamo.component';
import { DevolucionComponent } from './devolucion/devolucion.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FormsModule } from '@angular/forms';
import { ActualizarLibroComponent } from './actualizar-libro/actualizar-libro.component';
import { ReservarComponent } from './reservar/reservar.component';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';
import { ReportesComponent } from './reportes/reportes.component';
import { LibroPerdidoComponent } from './libro-perdido/libro-perdido.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistroComponent,
    LibrosComponent,
    AddLibroComponent,
    PrestamoComponent,
    DevolucionComponent,
    UsuariosComponent,
    ActualizarLibroComponent,
    ReservarComponent,
    ActualizarUsuarioComponent,
    AddUsuarioComponent,
    ReportesComponent,
    LibroPerdidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
