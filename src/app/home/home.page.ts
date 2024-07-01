import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCardHeader, IonCard, IonCardContent, IonCardTitle, IonButtons, IonButton, IonIcon, IonFabButton, IonFabList, IonFab } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { settingsOutline } from 'ionicons/icons';
import { add } from 'ionicons/icons';
import { RouterModule } from '@angular/router';
import { CitasService } from '../servicios/citas.service';
import { Frase } from '../modelo/citasfamosas';
import { CommonModule } from '@angular/common';
import { PreferenciasService } from '../servicios/preferencias.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule,IonHeader, IonFab, IonFabList, IonFabButton, IonCardTitle, IonCardHeader, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonButtons, IonButton, IonIcon],
})
export class HomePage implements OnInit {

  //frases:Frase[] = []

  fraseAleatoria: Frase | undefined;

  constructor(
    private citaServices:CitasService,
    private preferenciasService: PreferenciasService  // Inyecta el servicio de preferencias
  ) 
  { 
    addIcons({
    settingsOutline,
    add
   });
  }

  async ngOnInit(): Promise<void> {
    
    // Obtiene el valor de la preferencia
    const deboEliminar = await this.preferenciasService.deboEliminar();

    if (deboEliminar) {
      this.fraseAleatoria = undefined;  // Elimina la frase aleatoria si la preferencia lo indica
    } else {
      this.fraseAleatoria = this.citaServices.obtenerFraseAleatoria();
    }
  }

  /*ngOnInit(): void {
  this.frases = this.citaServices.obtenerFrases()
  }

   ngOnInit(): void {
     this.fraseAleatoria = this.citaServices.obtenerFraseAleatoria()
   }
  */
}
