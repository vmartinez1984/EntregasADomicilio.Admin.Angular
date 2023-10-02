import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaDtoIn } from 'src/app/interfaces/categoria-dto-in';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  agregar(categoria: CategoriaDtoIn): Observable<any> {
    return this.httpClient.post(this.url, categoria);
  }
  obtenerTodos(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  actualizar(categoriaId: number, categoria: CategoriaDtoIn) {    
    return this.httpClient.put(this.url + "/" + categoriaId, categoria)
  }

  constructor(private httpClient: HttpClient) { }
  private url = environment.api + "categorias"
}
