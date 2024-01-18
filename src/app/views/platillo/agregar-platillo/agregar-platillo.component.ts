import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RepositorioService } from 'src/app/services/repositorio.service';
import { PlatilloDtoIn } from '../platillo-dto';
import { Router } from '@angular/router';
import { FormularioDePlatilloComponent } from '../formulario-de-platillo/formulario-de-platillo.component';

@Component({
  selector: 'app-agregar-platillo',
  templateUrl: './agregar-platillo.component.html',
  styleUrls: ['./agregar-platillo.component.css']
})
export class AgregarPlatilloComponent {
  @ViewChild(FormularioDePlatilloComponent) formulario!: FormularioDePlatilloComponent

  constructor(private repo: RepositorioService, private router: Router) { }

  guardar(data: PlatilloDtoIn) {
    //console.log(data)
    this.formulario.estaGuardando(true)
    this.repo.platillo.agregar(data).subscribe({
      next: (data) => {
        this.router.navigate(["platillos"])
        this.formulario.estaGuardando(false)
      },
      error: (error) => {
        console.log(error)
        this.formulario.estaGuardando(false)
      }
    })
  }

}