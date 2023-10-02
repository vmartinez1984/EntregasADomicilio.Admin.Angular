import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoriaDtoIn } from 'src/app/interfaces/categoria-dto-in';
import { RepositorioService } from 'src/app/services/repositorio.service';

@Component({
  selector: 'app-agregar-categoria',
  templateUrl: './agregar-categoria.component.html',
  styleUrls: ['./agregar-categoria.component.css']
})
export class AgregarCategoriaComponent {
  estaCargando = false

  constructor(
    private servicio: RepositorioService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  guardar(categoria: CategoriaDtoIn) {
    console.log(categoria)
    this.estaCargando = true
    this.servicio.categoria.agregar(categoria).subscribe({
      next: (data) => {
        //console.log(data)
        this.snackBar.open("Datos registrado", "Ok", { duration: 3000 })
        this.router.navigate(['/categorias'])
        this.estaCargando = false
      }, error: (data) => { console.log(data) }
    })
  }

}
