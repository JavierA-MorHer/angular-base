import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent {

    blackpink: string[] = ['Jennie','Jisoo', 'Lisa', 'Rose'];
    elementoBorrado: string= '';

    borrarMiembro(){
       this.elementoBorrado = this.blackpink.shift() || '';
    }
}
