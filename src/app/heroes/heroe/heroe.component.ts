import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'heroe-app',
  templateUrl: 'heroe.component.html'
})

export class HeroeComponent {
nombre : String = "Batman";
edad : number = 30;

obtenerNombre():String{
  return `${this.nombre}  ${this.edad}`;
}

get nombreCapitalizado() :String{
  return this.nombre.toUpperCase();
}

cambiarNombre():void{
this.nombre = "Spiderman"
}

cambiarEdad():void{
  this.edad = 23;
}
}
