import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent  {

  nuevo: Personaje = {
    nombre: 'Spider-man',
    poder: 500
  }

  constructor(  ){ }
}
