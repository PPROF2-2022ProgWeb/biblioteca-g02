import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestion_biblioteca';

//Declaramos variables
 side_menu = document.getElementById("menu_side");
 body = document.querySelector("#body");
 boton = document.querySelector("#btn_open");
 nav:boolean;

 meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
 f=new Date();
 fecha = (this.f.getDate() + " de " + this.meses[this.f.getMonth()] + " de " + this.f.getFullYear());

 
 mostrarNav(){
  this.nav = true;
 }

 ocultarNav(){
  this.nav = false;
 }

}


