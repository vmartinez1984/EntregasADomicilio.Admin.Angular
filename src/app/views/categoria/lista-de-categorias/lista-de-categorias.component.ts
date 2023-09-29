import { Component } from '@angular/core';
import { CategoriaService } from 'src/app/services/repositorios/categoria.service';

@Component({
  selector: 'app-lista-de-categorias',
  templateUrl: './lista-de-categorias.component.html',
  styleUrls: ['./lista-de-categorias.component.css']
})
export class ListaDeCategoriasComponent {
  estaCargando = false
  categorias: any[] = []

  constructor(private servicio: CategoriaService) {
    this.estaCargando = true
    this.servicio.obtenerTodos().subscribe({
      next: (data) => {
        this.categorias = data
        this.estaCargando = false
      }
    })
  }
}
