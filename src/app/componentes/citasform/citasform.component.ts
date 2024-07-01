import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IonInput, IonItem, IonButton, IonText } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { CitasService } from 'src/app/servicios/citas.service';

@Component({
  selector: 'app-citasform',
  templateUrl: './citasform.component.html',
  styleUrls: ['./citasform.component.scss'],
  standalone: true,
  imports: [IonText, IonButton, FormsModule, IonInput, IonItem]
})
export class CitasformComponent  implements OnInit {

/*  fraseSTR:string = ""
  @Output() onCreate = new EventEmitter<string>()
*/
mensaje: string = "";
  autor: string = "";
  @Output() onCreate = new EventEmitter<{ mensaje: string, autor: string }>();   
  
  constructor(
    private citasService: CitasService
  ) { }

  ngOnInit() {}

/*//manejador del evento del boton
  onClick() {
    this.onCreate.emit(this.fraseSTR)
  }*/
onClick() {
  this.onCreate.emit({ mensaje: this.mensaje, autor: this.autor });
  this.mensaje = '';  // Resetear el mensaje
  this.autor = '';    // Resetear el autor
} 
  
}
