import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
  exports: [ContadorComponent],
  declarations: [ContadorComponent]
})
export class ContadorModule { }
