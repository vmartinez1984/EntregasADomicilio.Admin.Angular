import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PlatilloService {
  
  obtenerTodos():Observable<any>{
    return this.httpCliente.get(this.url)
  }

  constructor(private httpCliente: HttpClient) { }

  private url = environment.api + "platillos"
}
