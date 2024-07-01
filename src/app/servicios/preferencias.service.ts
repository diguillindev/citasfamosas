import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';


@Injectable({
  providedIn: 'root'
})
export class PreferenciasService {

  private readonly KEY_ELIMINAR = "Eliminar"

  constructor() {}

  async deboEliminar():Promise<boolean>{
    const resultado = await Preferences.get({key:this.KEY_ELIMINAR})
    return resultado?.value == "true" ?? false
  }

  async setEliminar(deboEliminar:boolean): Promise<void>{
    await Preferences.set({ 
      key: this.KEY_ELIMINAR,
      value: deboEliminar ? "true" : "false"
    })
  }
  /*private _borrarCitasEnInicio: boolean = false; // Valor por defecto

  constructor() { }
//dos metodos para establacer borrado 
get borrarCitasEnInicio(): boolean {
  return this._borrarCitasEnInicio;
}

set borrarCitasEnInicio(value: boolean) {
  this._borrarCitasEnInicio = value;
}*/

}
