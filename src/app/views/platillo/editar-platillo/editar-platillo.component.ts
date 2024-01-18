import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositorioService } from 'src/app/services/repositorio.service';
import { PlatilloDto } from '../platillo-dto';
import { FormularioDePlatilloComponent } from '../formulario-de-platillo/formulario-de-platillo.component';

@Component({
  selector: 'app-editar-platillo',
  templateUrl: './editar-platillo.component.html',
  styleUrls: ['./editar-platillo.component.css']
})
export class EditarPlatilloComponent {
  id: any
  platillo!:PlatilloDto

  //@ViewChild('formularioDePlatillo') formularioDePlatillo!: FormularioDePlatilloComponent

  constructor(
    private activatedRouted: ActivatedRoute,
    private repo: RepositorioService,
  ) {
    this.id = this.activatedRouted.snapshot.params['id']
    this.obtenerPlatillo(this.id)
    ///this.formularioDePlatillo.estaGuardando(true)
  }

  obtenerPlatillo(id: any) {
    this.repo.platillo.obtener(this.id).subscribe({
      next: (platillo) => {
        this.platillo = platillo
      }
    })
  }

  actualizar(data: any) {

  }
}
