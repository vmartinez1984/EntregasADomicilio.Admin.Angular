import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaDto, CategoriaDtoIn } from 'src/app/interfaces/categoria-dto-in';
import { RepositorioService } from 'src/app/services/repositorio.service';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent {

  guardar(categoria: CategoriaDtoIn) {
    //console.log(categoria)
    //console.log(this.activatedRouted.snapshot.params['id'])
    this.servicio.categoria.actualizar(this.activatedRouted.snapshot.params['id'], categoria)
    .subscribe({
      next: (data) => {
        this.snackBar.open("Datos registrado", "Ok", { duration: 3000 })
        this.router.navigate(['/categorias'])
        this.estaCargando = false
      }, error: (data) => { console.log(data) }
    })
  }

  categoria: CategoriaDtoIn
  estaCargando: any;

  constructor(
    private activatedRouted: ActivatedRoute,
    private servicio: RepositorioService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    //console.log(this.activatedRouted.snapshot.params)
    this.categoria = {
      estaActivo: 'true' === this.activatedRouted.snapshot.params['estaActivo'],
      nombre: this.activatedRouted.snapshot.params['nombre']
    }
  }
}
