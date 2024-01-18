import { Component } from '@angular/core';
import { RepositorioService } from 'src/app/services/repositorio.service';
import { PlatilloDto } from '../platillo-dto';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-lista-de-platillos',
  templateUrl: './lista-de-platillos.component.html',
  styleUrls: ['./lista-de-platillos.component.css']
})
export class ListaDePlatillosComponent {
  platillos: PlatilloDto[] = []
  constructor(private servicio: RepositorioService) {
    this.servicio.platillo.obtenerTodos().subscribe({
      next: (data) => {
        console.log(data)
        this.platillos = data
      }
    })
  }

  obtenerUrl(platillo: PlatilloDto) {
    return environment.api +"Platillos/"+ platillo.id + "/Imagen"
  }
}
