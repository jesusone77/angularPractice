import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css'],
})

export class PersonasComponent{ 
    componente = 'Personas';
    desabilitar = false;
    texto = 'Off';
    encender () {
        this.desabilitar = true;
        return this.texto = 'on';
    }
}