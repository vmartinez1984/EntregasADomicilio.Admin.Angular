import { Injectable } from '@angular/core';
import { InicioDeSesionService } from './inicio-de-sesion.service';
import { HttpClient } from '@angular/common/http';
import { TokenDto } from './token-dto';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionService {
  obtenerRol():string {
      return this.obtenerCampo("Role")
  }  

  estaIniciadaLaSesion(): boolean {
    const token = localStorage.getItem(this.llaveToken)
    if (!token)
      return false

    const expiracion = localStorage.getItem(this.llaveExpiracion)
    const fechaDeExpiracion = new Date(expiracion!)
    if (fechaDeExpiracion <= new Date()) {
      this.cerrarSesion()
      return false
    }

    return true
  }

  guardarToken(respuesta: TokenDto) {
    localStorage.setItem(this.llaveExpiracion, respuesta.expiracion.toString())
    localStorage.setItem(this.llaveToken, respuesta.token)
  }

  obtenerToken() {
    const token = localStorage.getItem(this.llaveToken)

    return token
  }

  obtenerCampo(campo: string): string {
    const token = localStorage.getItem(this.llaveToken)
    //console.log(JSON.parse(atob(token!.split('.')[1])))
    if (!token)
      return ''

    var dataToken = JSON.parse(atob(token.split('.')[1]))

    return dataToken[campo]
  }

  obtenerNombre() {
    return this.obtenerCampo("Nombre")
  }

  cerrarSesion() {
    localStorage.removeItem(this.llaveExpiracion)
    localStorage.removeItem(this.llaveToken)
  }

  constructor(private httpClient: HttpClient) {
    this.inicioDeSesion = new InicioDeSesionService(this.httpClient)
  }

  public inicioDeSesion: InicioDeSesionService
  private readonly llaveToken = 'token'
  private readonly llaveExpiracion = 'expiracion'
}
