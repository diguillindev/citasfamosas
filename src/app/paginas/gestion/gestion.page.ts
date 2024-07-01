import { Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardTitle, IonCard } from '@ionic/angular/standalone';
import { Frase } from 'src/app/modelo/citasfamosas';
import { CitasService } from 'src/app/servicios/citas.service';
import { CitaslistComponent } from "../../componentes/citaslist/citaslist.component";
import { CitasformComponent } from 'src/app/componentes/citasform/citasform.component';

@Component({
    selector: 'app-gestion',
    templateUrl: './gestion.page.html',
    styleUrls: ['./gestion.page.scss'],
    standalone: true,
    imports: [IonCard, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, CitaslistComponent, CitasformComponent]
})
export class GestionPage implements OnInit {

  listafrases: Frase[] = [];
 
  //inyeccion de servicio 
  constructor(
    private citaService: CitasService
  ) { }
   
  //metodo de ciclo de vida
  ngOnInit() {
    this.listafrases = this.citaService.obtenerFrases()
  }

/* onCreateFrases($event: string) {
    const frase = new Frase ($event, $event)
    this.citaService.agregarFrase(frase)
    }*/
   
onCreateFrases($event: { mensaje: string, autor: string }) {
    const frase = new Frase($event.mensaje, $event.autor);
    this.citaService.agregarFrase(frase);
    this.listafrases = this.citaService.obtenerFrases();  // Actualiza la lista de frases
  }   

}
