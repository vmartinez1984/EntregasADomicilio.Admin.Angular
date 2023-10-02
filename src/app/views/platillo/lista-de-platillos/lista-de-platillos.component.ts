import { Component } from '@angular/core';
import { RepositorioService } from 'src/app/services/repositorio.service';

@Component({
  selector: 'app-lista-de-platillos',
  templateUrl: './lista-de-platillos.component.html',
  styleUrls: ['./lista-de-platillos.component.css']
})
export class ListaDePlatillosComponent {

  constructor(private servicio: RepositorioService){
    this.servicio.platillo.obtenerTodos().subscribe({
      next:(data)=>{
        console.log(data)
      }
    })
  }
}
