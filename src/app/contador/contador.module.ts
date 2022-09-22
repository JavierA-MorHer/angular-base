import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contador.component";


//Decorador
@NgModule({
    declarations:[
        ContadorComponent
    ],
    //Exportarlo para que pueda ser usado fuera de este modulo
    exports:[
        ContadorComponent
    ],
})

export class ContadorModule{

}