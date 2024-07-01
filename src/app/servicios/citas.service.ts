import { Injectable } from '@angular/core';
import { Frase } from '../modelo/citasfamosas';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  private _frases =  [
    /*{ mensaje: "frase inspiradora", autor: "Alonso" },
    { mensaje: "frase inspiradora", autor: "Pedro" },
    { mensaje: "frase inspiradora", autor: "Juan" }*/
    
    new Frase ("frase inspiradora","Fabrizio Copano"),
    new Frase ("frase2", "Tulio Trivino"),
    new Frase ("frase3", "Kurt Carrera")
  ];

  constructor() { }

  // metodo para obtener una frase aleatoria
  obtenerFraseAleatoria(): Frase {
    const indiceAleatorio = Math.floor(Math.random() * this._frases.length);
    return this._frases[indiceAleatorio];
  }

   // Método para obtener todas las frases
   obtenerFrases(): Frase[] {
    return this._frases;
  }

  // Método para agregar una nueva frase
  agregarFrase(frase: Frase) {
    this._frases.push(frase);
  }

  // Método para eliminar una frase por índice (servicio)
  eliminarFrase(indice: number) {
    if (indice >= 0 && indice < this._frases.length) {
      this._frases.splice(indice, 1);
    } else {
      console.error('Índice NO DISPONIBLE');
    }

  
  }

}
