import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit{


  @Input () nombre: string = "Anónimo";
  @Output() mensajeEmitter: EventEmitter<string> = new EventEmitter<string>();
  

    constructor (){ }

    ngOnInit(): void {
    console.log("OnInit del componente Saludo")
  }
  /*
  * Ejemplo para gestionar un evento de tipo click en el DOM
   */
  enviarMensajeAlPadre():void{

    /* alert(`Hola, ${this.nombre}. Alerta despachada desde click de boton`); */
    this.mensajeEmitter.emit(`Hola, ${this.nombre}. Alerta despachada desde click de boton`);

  }

}

