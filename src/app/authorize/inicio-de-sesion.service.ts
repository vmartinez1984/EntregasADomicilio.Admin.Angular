import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InicioDeSesionDto } from './inicio-de-sesion';
import { Observable } from 'rxjs';
import { TokenDto } from './token-dto';

@Injectable({
  providedIn: 'root'
})
export class InicioDeSesionService {

  iniciarSesion(inicioDeSesion: InicioDeSesionDto): Observable<TokenDto> {
    return this.httpClient.post<TokenDto>(this.url, inicioDeSesion)
  }

  constructor(private httpClient: HttpClient) { }

  private url = "https://localhost:7073/api/administracion/Usuarios/Login"
}
