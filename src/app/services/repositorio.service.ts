import { Injectable } from '@angular/core';
import { CategoriaService } from './repositorios/categoria.service';
import { HttpClient } from '@angular/common/http';
import { PlatilloService } from './repositorios/platillo.service';

@Injectable({
  providedIn: 'root'
})
export class RepositorioService {
  public categoria: CategoriaService
  public platillo: PlatilloService

  constructor(private httpClient: HttpClient) {
    this.categoria = new CategoriaService(this.httpClient)
    this.platillo = new PlatilloService(this.httpClient)
  }
}
