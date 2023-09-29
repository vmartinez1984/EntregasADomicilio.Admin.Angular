import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  obtenerTodos(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  constructor(private httpClient: HttpClient) { }
  private url = "https://localhost:7073/api/administracion/" + "categorias"
}
