import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, ToggleChangeEventDetail , IonList, IonToggle } from '@ionic/angular/standalone';
import { IonToggleCustomEvent } from '@ionic/core';
import { PreferenciasService } from 'src/app/servicios/preferencias.service';


@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [IonToggle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonLabel, IonList]
})
export class ConfiguracionPage implements OnInit {
 
  deboEliminar: boolean = false;

  constructor(
    private preferenciasService: PreferenciasService 
  ) { }

  async ngOnInit() {
    this.deboEliminar = await this.preferenciasService.deboEliminar()
  }

  ionChange($event: IonToggleCustomEvent<ToggleChangeEventDetail<any>>) {
    /*const valor = $event.detail.value;
    console.dir({valor})*/
    this.preferenciasService.setEliminar(this.deboEliminar)
    }
  
}
