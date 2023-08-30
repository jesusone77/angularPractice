import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  persona = 'Giselle';
  textUno = 'Ingresa tu nombre'; 

  modificarTexto (event: Event)  {
    this.textUno = (<HTMLInputElement>event.target).value;
  }
}
