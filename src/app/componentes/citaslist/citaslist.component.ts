import { Component, Input, OnInit } from '@angular/core';
import { Frase } from 'src/app/modelo/citasfamosas';
import { CommonModule } from '@angular/common';
import { CitasService } from 'src/app/servicios/citas.service';

@Component({
  selector: 'app-citaslist',
  templateUrl: './citaslist.component.html',
  styleUrls: ['./citaslist.component.scss'],
  standalone: true,
  imports:[CommonModule]
})
export class CitaslistComponent implements OnInit {

  @Input() frases:Frase[] = [];
  
  constructor(private citasService: CitasService) { }


  ngOnInit() {
  }
 
  // Método para eliminar una frase por índice (componente)
  eliminarFrasePorIndice(indice: number) {
    this.citasService.eliminarFrase(indice);
  }
   
}
