import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: String[] = ['Spiderman', 'hulk', 'thor', 'batman'];
  borrado: String = '';

  borrarHeroes(): void {
    this.borrado = this.heroes.pop() || '';
  }
}
