import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlatilloDtoIn } from 'src/app/views/platillo/platillo-dto';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PlatilloService {
  obtener(id: any):Observable<any> {
    return this.httpCliente.get(this.url + id)  
  }

  agregar(platillo: PlatilloDtoIn): Observable<any> {
    const formData = this.obtenerFormData(platillo)
    return this.httpCliente.post(this.url, formData)
  }

  private obtenerFormData(platillo: PlatilloDtoIn) {
    const formData = new FormData()
    formData.append('nombre', platillo.nombre)
    formData.append('descripcion', platillo.descripcion)
    formData.append('precio', platillo.precio.toString())
    formData.append('formFile', platillo.imagen)
    formData.append('categoriaId', platillo.categoriaId.toString())

    return formData
  }

  obtenerTodos(): Observable<any> {
    return this.httpCliente.get(this.url)
  }

  constructor(private httpCliente: HttpClient) { }

  private url = environment.api + "platillos/"
}
