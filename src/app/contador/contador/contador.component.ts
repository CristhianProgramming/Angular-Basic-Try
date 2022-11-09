import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
  <h1>{{title}}</h1>
    <h3>
      La Base es : <strong>{{ base }}</strong>
    </h3>
    <br />
    <button type="button" (click)="acumular()">Sumar {{ base }}</button>
    <span>{{ numero }}</span>
    <button type="button" (click)="acumular(-base)">Menos {{ base }}</button>
  `,
})
export class ContadorComponent {
  numero: number = 0;
  base: number = 5;
  title : String = 'Simple Angular :)';


  acumular(valor: number = this.base): number {
    return (this.numero += valor);
  }
}
